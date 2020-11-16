const router = require("express").Router();

const Users = require("./user-model");
const Projects = require("../projects/projects-model");

const restricted = require("../auth/restricted-middleware.js");

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.send(err));
});

router.get("/:id/projects", restricted, (req, res) => {
  Projects.getAllById(req.params.id)
    .then((projects) => {
      res.status(200).json(projects);
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
