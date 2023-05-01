const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  decpription: String,
  content: String,
  DataAt: {
    type: Date,
    default: new Date(),
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  image: String,
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
