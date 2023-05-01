const User = require("../userSchema");
const bcrypt = require("bcrypt");

module.exports = (req, res) => {
  User.create(req.body, async (err, user) => {
    if (err) {
      const Errors = Object.keys(err.errors).map(
        (key) => err.errors[key].message
      );
      req.flash("Errors", Errors);
      req.flash("data", req.body);
      return res.redirect("/register");
    }
    const solt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, solt);
    user.save();
    res.redirect("/login");
  });
};
