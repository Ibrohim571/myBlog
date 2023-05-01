const Post = require("../post");
const path = require("path");

module.exports = (req, res) => {
  const { image } = req.files;
  image.mv(
    path.resolve(__dirname, "..", "views/public/img", image.name),
    (err) => {
      if (err) {
        console.log(err);
      }
      Post.create(
        {
          ...req.body,
          image: `/public/img/${image.name}`,
          author: req.session.userId,
        },
        (err, post) => {
          if (err) {
            console.log(err);
          }
          res.redirect("/");
        }
      );
    }
  );
};
