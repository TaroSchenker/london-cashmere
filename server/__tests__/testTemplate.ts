import request from "supertest";
import app from "../src/app";
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
  const mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
    address: "123 Main St",
  };

  test("should register a new user successfully", async () => {
    const res = await request(app).post("/api/users/register").send(mockUser);
    expect(res.status).toBe(201);
    expect(res.body.message).toBe("User registered successfully");
  });
});
