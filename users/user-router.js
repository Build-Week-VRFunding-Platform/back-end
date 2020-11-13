const router = require("express").Router();

const Users = require("./user-model");
// const restricted = require("../auth/restricted-middleware.js");

// function roleChecker(role) {
//   return function (req, res, next) {
//     if (req.decodedJwt.role === role) {
//       next();
//     } else {
//       res.status(401).json({ message: "You don't have access to this route" });
//     }
//   };
// }

// router.get("/", restricted, roleChecker(1), (req, res) => {
//   Users.find()
//     .then((users) => {
//       res.status(200).json(users);
//     })
//     .catch((err) => res.send(err));
// });

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
