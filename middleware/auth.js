const userSchema = require("../userSchema");

module.exports = (req, res, next) => {
  userSchema.findById(req.session.userId, (err, post) => {
    if (err || !post) {
      return res.redirect("/");
    }
    res.render("createPost");
  });
  next();
};
