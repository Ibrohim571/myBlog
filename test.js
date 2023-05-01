const mongoose = require("mongoose");
const Post = require("./post");

mongoose.connect(
  "mongodb+srv://Ibrohim:SpedIEMNPzCpO5H8@cluster0.jhuep.mongodb.net/node-blog"
);

Post.create(
  {
    title: "My frist",
    description: "dsdsdsdsdsdsd",
  },
  (err, post) => console.log(err, post)
);
