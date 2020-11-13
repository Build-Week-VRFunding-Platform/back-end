//role 1 = investor
//role 0 = project owner

exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("email", 128).notNullable();
      tbl.string("password", 128).notNullable();
      tbl.string("name");
      tbl.integer("role").notNullable();
    })
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("project_name", 1000).notNullable();
      tbl.string("project_description", 1000).notNullable();
      tbl.integer("project_funding").notNullable();
      tbl.boolean("funded").default(false);
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects").dropTableIfExists("users");
};
