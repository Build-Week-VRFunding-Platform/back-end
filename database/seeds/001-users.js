exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users").insert([
    {
      email: "will@will.com",
      password: "password123",
      name: "will",
      role: 1,
    },
    {
      email: "mike@mike.com",
      password: "123456789",
      name: "mike",
      role: 0,
    },
    {
      email: "justin@justin.com",
      password: "123456789",
      name: "justin",
      role: 0,
    },
  ]);
};

//role 1 = investor
//role 0 = project owner
