const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const Users = require("../users/user-model");
const { isValid } = require("../users/users.service");
const { jwtSecret } = require("../auth/secrets.js");

router.post("register", (req, res) => {
  const credentials = req.body;
  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcryptjs.hashSync(credentials.password, rounds);
    credentials.password = hash;
    Users.add(credentials)
      .then((user) => {
        res.status(201).json({ data: user });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message:
        "please provide email and password and the password should be alphanumeric",
    });
  }
});

module.exports = router;
