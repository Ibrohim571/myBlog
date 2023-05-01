const Post = require("../post");

module.exports = async (req, res) => {
  const posts = await Post.findById(req.params.id).populate("author", "name");
  res.render("post", { posts });
};
