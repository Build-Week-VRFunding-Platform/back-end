const router = require("express").Router();

const Projects = require("./projects-model");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
  Projects.getAll()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => res.send(err));
});

router.post("/", (req, res) => {
  const newProject = {
    ...req.body,
    user_id: req.decodedJwt.id,
  };
  Projects.add(newProject)
    .then((project) => {
      // res.status(200).json(project);
      Projects.getById(project).then((result) => {
        res.status(200).json({
          result,
        });
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err, request: req.body });
    });
});

router.get("/:id", restricted, (req, res) => {
  Projects.getById(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => res.send(err));
});

router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Projects.getById(id)
    .then((project) => {
      if (project) {
        return Projects.update(changes, id);
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .then((updatedProject) => {
      res.json(updatedProject);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;
  Projects.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json(deleted);
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete project" });
    });
});

module.exports = router;
