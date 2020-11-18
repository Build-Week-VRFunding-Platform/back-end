// const User = require("./user-model");
// const db = require("../database/db-config");

describe("user test works", () => {
  test("it works", () => {
    expect(1 + 1).toBe(2);
  });
});

// describe("modules work", () => {
//   beforeEach(async () => {
//     await db("projects").truncate();
//     await db("users").truncate();
//   });

//   describe("add method works", () => {
//     it("will insert a new user", async () => {
//       await User.add({
//         email: "random@random.com",
//         password: "123456789",
//         name: "test123",
//         role: 0,
//       });
//       const users = await db("users");
//       expect(users).toHaveLength(1);
//     });
//   });
// });
