import request from "supertest";
import app from "../../src/app";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri);
});

beforeEach(async () => {});

afterEach(async () => {
  await mongoose.connection.dropDatabase();
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("User Controller", () => {
  describe("Register Route", () => {
    const mockUser = {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
      address: "123 Main St"
    };

    test("should register a new user successfully", async () => {
      const res = await request(app).post("/api/users/register").send(mockUser);
      expect(res.status).toBe(201);
      expect(res.body.message).toBe("User registered successfully");
      expect(res.body.user.id).toBeDefined();
      expect(res.body.user.name).toBe(mockUser.name);
      expect(res.body.user.email).toBe(mockUser.email);
      expect(res.body.user.hashedPassword).not.toBeDefined();
    });

    test("should not register a user with an already existing email", async () => {
      await request(app).post("/api/users/register").send(mockUser);
      const res = await request(app).post("/api/users/register").send(mockUser);
      expect(res.status).toBe(400);
      expect(res.body.message).toBe("User already exists");
    });
  });

  describe("Login Route", () => {
    const mockUser = {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      password: "password1234",
      address: "456 Elm St"
    };

    beforeEach(async () => {
      await request(app).post("/api/users/register").send(mockUser);
    });

    test("should login successfully", async () => {
      const res = await request(app).post("/api/users/login").send({
        email: mockUser.email,
        password: mockUser.password
      });
      expect(res.status).toBe(200);
      expect(res.body.token).toBeDefined();
      expect(res.body.user.email).toBeDefined();
      expect(res.body.user.id).toBeDefined();
      expect(res.body.user.hashedPassword).not.toBeDefined();
    });

    test("should not login with a wrong password", async () => {
      const res = await request(app).post("/api/users/login").send({
        email: mockUser.email,
        password: "wrongPassword"
      });
      expect(res.status).toBe(400);
      expect(res.body.message).toBe("Invalid email or password");
    });

    test("should not login with a non-existent email", async () => {
      const res = await request(app).post("/api/users/login").send({
        email: "non.existent@example.com",
        password: "password1234"
      });
      expect(res.status).toBe(400);
      expect(res.body.message).toBe("Invalid email or password");
    });
  });
});
