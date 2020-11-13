const router = require("express").Router();

const Users = require("./user-model");

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.send(err));
});

router.get("/:id", (req, res) => {
  Users.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => res.send(err));
});

router.post("/", (req, res) => {
  Users.add(req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

module.exports = router;
