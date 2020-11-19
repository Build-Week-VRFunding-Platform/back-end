const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("./auth/auth-router");
const authenticate = require("./auth/restricted-middleware");
const usersRouter = require("./users/user-router");
const projectsRouter = require("./projects/projects-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/projects", projectsRouter);
server.use("/api/users", authenticate, usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "It's alive!" });
});

module.exports = server;
