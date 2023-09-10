import request from "supertest";
import app from "../../src/app";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { Product } from "../../src/models/Product";
import { generateToken } from "../../src/utils/generateToken";
import { UserRole } from "../../src/types";

let mongoServer: MongoMemoryServer;
let adminToken: string;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let userToken: string;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri);
  adminToken = generateToken(
    new mongoose.Types.ObjectId().toString(),
    UserRole.ADMIN
  );
  userToken = generateToken(
    new mongoose.Types.ObjectId().toString(),
    UserRole.CUSTOMER
  );
});

beforeEach(async () => {});

afterEach(async () => {
  await mongoose.connection.dropDatabase();
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Product Controller", () => {
  const mockProduct = {
    name: "Sample Product8",
    description: "This is a sample product for testing.",
    price: 100,
    size: ["S", "M", "L"],
    color: ["Red", "Blue"],
    imageUrl: "http://example.com/image.jpg",
    stockCount: 10
  };

  test("should retrieve all products", async () => {
    console.log("Admin Token:", adminToken);
    const res = await request(app).get("/api/products");
    expect(res.status).toBe(200);
  });

  // test("should create a new product", async () => {
  //   const res = await request(app)
  //     .post("/api/products")
  //     .set("Authorization", `Bearer ${adminToken}`) // Use the adminToken here
  //     .send(mockProduct);

  //   expect(res.status).toBe(201);
  //   expect(res.body.name).toBe(mockProduct.name);
  // });

  test("should retrieve a product by ID", async () => {
    const product = new Product(mockProduct);
    await product.save();

    const res = await request(app).get(`/api/products/${product._id}`);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(mockProduct.name);
  });

  // test("should update a product", async () => {
  //   const product = new Product(mockProduct);
  //   const saved = await product.save();
  //   // const updatedData = { name: "Updated Product" };
  //   // Add authentication logic here if needed
  //   const res = await request(app)
  //     .put(`/api/products/${product._id}`)
  //     .set("Authorization", `Bearer ${adminToken}`); // Use the adminToken here.send(updatedData);
  //   expect(res.status).toBe(200);
  //   expect(res.body.name).toBe(mockProduct.name);
  // });

  // test("should delete a product", async () => {
  //   const product = new Product(mockProduct);
  //   await product.save();

  //   // Add authentication logic here if needed
  //   const res = await request(app)
  //     .delete(`/api/products/${product._id}`)
  //     .set("Authorization", `Bearer ${adminToken}`); // Use the adminToken here;
  //   expect(res.status).toBe(200);
  //   expect(res.body.message).toBe("Product deleted");
  // });
});
