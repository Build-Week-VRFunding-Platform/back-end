exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects").insert([
    {
      project_name: "virtual skiing holiday",
      project_description: "password123",
      project_funding: "will",
      funded: true,
      user_id: 2,
    },
    {
      project_name: "mike@mike.com",
      project_description: "123456789",
      project_funding: "mike",
      funded: false,
      user_id: 2,
    },
    {
      project_name: "justin@justin.com",
      project_description: "123456789",
      project_funding: "justin",
      funded: false,
      user_id: 3,
    },
  ]);
};

//role 1 = investor
//role 0 = project owner
