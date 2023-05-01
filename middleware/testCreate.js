module.exports = (req, res, next) => {
  if (
    !(req.files && req.files.image) ||
    !req.body.title ||
    !req.body.decpription ||
    !req.body.content
  ) {
    return res.redirect("/posts/new");
  }
  next();
};
