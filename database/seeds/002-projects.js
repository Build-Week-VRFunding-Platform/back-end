exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects").insert([
    {
      project_name: "virtual skiing holiday",
      project_description: "virtually go skiing",
      project_funding: 10000,
      funded: true,
      user_id: 2,
    },
    {
      project_name: "house tour",
      project_description: "see affordable housing",
      project_funding: 5000,
      funded: false,
      user_id: 2,
    },
    {
      project_name: "go to the beach!",
      project_description: "see the beach for the first time!",
      project_funding: 7500,
      funded: false,
      user_id: 3,
    },
  ]);
};

//role 1 = investor
//role 0 = project owner
