/* eslint-disable prettier/prettier */
var exports = module.exports = {};
exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req,res) {
  res.render("signin");
};

exports.dashboard = function(req,res) {
  res.render("dashboard");
};

exports.logout = function(req, res) {
  req.session.destroy(function(err){
    if (err) {throw err;}
    res.redirect("/");
  });
};
