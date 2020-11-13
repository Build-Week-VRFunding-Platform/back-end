const db = require("../database/db-config");

module.exports = {
  add,
  find,
  findById,
};

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(() => find());
}

function find() {
  return db("users").select("id", "email").orderBy("id");
}

function findById(id) {
  return db("users").where({ id }).first();
}
