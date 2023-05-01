const Post = require("../post");

module.exports = async (req, res) => {
  const posts = await Post.find().populate("author", "name");
  res.render("index", { posts });
};
