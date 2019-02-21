var db = require('../db/index')

const authHelpers = require("../auth/helpers");

function createUser(req, res, next) {
  const hash = authHelpers.createHash(req.body.password);

  console.log("in it!")

  db.none(
    "INSERT INTO users (email, username, password_digest) VALUES (${email}, ${username}, ${password})",
    { email: req.body.email, username: req.body.username, password: hash }
  )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: err
      });
    });
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

function loginUser(req, res) {
  res.json(req.user);
}

function isLoggedIn(req, res) {
  if (req.user) {
    res.json({ username: req.user });
  } else {
    res.json({ username: null });
  }
}

module.exports = {
  createUser: createUser,
  logoutUser: logoutUser,
  loginUser: loginUser,
  isLoggedIn: isLoggedIn
};