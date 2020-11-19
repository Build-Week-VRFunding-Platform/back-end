const supertest = require("supertest");
const server = require("./server");
const db = require("./database/db-config");

describe("server test works", () => {
  test("it works", () => {
    expect(1 + 1).toBe(2);
  });
});

let token;

describe("auth testing", () => {
  describe("environment", () => {
    it('set DB_ENV var to "testing"', () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("/register", () => {
    it("should return 201 when user is successfully created", async () => {
      await db("users").truncate();
      return supertest(server)
        .post("/api/auth/register")
        .send({
          email: "supertest@supertest.com",
          password: "12345678",
          name: "Supertest",
          role: "0",
        })
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });
  });
});

describe("/login", () => {
  it("should return 400 upon unsuccessful login", () => {
    return supertest(server)
      .post("/api/auth/login")
      .send({ email: "supertest@supertest.com", password: "" })
      .then((res) => {
        expect(res.status).toBe(400);
      });
  });
  it("should return 200 upon successful login", () => {
    return supertest(server)
      .post("/api/auth/login")
      .send({ email: "supertest@supertest.com", password: "12345678" })
      .then((res) => {
        token = res.body.token;
        expect(res.status).toBe(200);
      });
  });
});

describe("/projects", () => {
  it("add a project to the database, will throw 500 because do not have auth", async () => {
    await db("projects").truncate();
    return supertest(server)
      .post("/api/projects")
      .send({
        project_name: "supertest test ",
        project_description: "testing supertest",
        project_funding: 1000,
        funded: false,
        // user_id: 1,
      })
      .then((res) => {
        expect(res.status).toBe(500);
      });
  });
});
