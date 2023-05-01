const path = require("path");
const express = require("express");
const app = express();
const { engine } = require("express-edge");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const connectMongo = require("connect-mongo");
const AppFlash = require("connect-flash");
const Port = process.env.PORT || 5000;

const getHome = require("./constructor/getHome");
const getPost = require("./constructor/getPost");
const getCreate = require("./constructor/getCreate");
const Logout = require("./constructor/logout");

const testCreate = require("./middleware/testCreate");
const auth = require("./middleware/auth");
const authLogin = require("./middleware/authLogin");

const MongoUrl =
  "mongodb+srv://Ibrohim:SpedIEMNPzCpO5H8@cluster0.jhuep.mongodb.net/node-darslik";

mongoose.connect(MongoUrl, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("ishladi");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const fileUpload = require("express-fileupload");
app.use(fileUpload());
app.use(engine);
app.set("views", `${__dirname}/views`);
app.use(express.static("views"));
app.use(AppFlash());
app.use(
  expressSession({
    secret: "Ibrohim",
    store: connectMongo.create({ mongoUrl: MongoUrl }),
  })
);
app.use("*", (req, res, next) => {
  app.locals.auth = req.session.userId;
  next();
});

app.get("/", getHome);

app.get("/post/:id", getPost);

app.get("/posts/new", auth, (req, res) => {});

app.get("/register", authLogin, (req, res) => {
  const Errors = req.flash("Errors");
  const data = req.flash("data")[0];
  res.render("register", { Errors, data });
});

app.post("/register/newUser", require("./constructor/userStore"));

app.get("/login", authLogin, (req, res) => {
  res.render("Login");
});

app.post("/login/newUser", require("./constructor/Login"));

app.post("/create/post", testCreate, getCreate);
app.get("/logout", Logout);

app.use((req, res, next) => {
  res.render("notFound");
  next();
});

app.listen(Port, () => {
  console.log(`Server is started on port ${Port}`);
});
