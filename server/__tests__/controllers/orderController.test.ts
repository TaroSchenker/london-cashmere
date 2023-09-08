import request from "supertest";
import app from "../../src/app";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { Order } from "../../src/models/Order";
import { generateToken } from "../../src/utils/generateToken";
import { UserRole, OrderStatus } from "../../src/types";

let mongoServer: MongoMemoryServer;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let adminToken: string;
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

describe("Order Controller", () => {
  const mockOrder = {
    customerDetails: {
      name: "Sample Customer",
      email: "sample@example.com",
      address: "123 Sample St"
    },
    orderedProducts: [
      {
        productId: new mongoose.Types.ObjectId(),
        quantity: 1
      }
    ],
    totalAmount: 100,
    status: OrderStatus.PENDING,
    paymentId: "samplePaymentId"
  };

  test("should retrieve all orders", async () => {
    const res = await request(app)
      .get("/api/orders")
      .set("Authorization", `Bearer ${userToken}`);
    expect(res.status).toBe(403);
  });

  // test("should not retrieve all orders if customer", async () => {
  //   const res = await request(app)
  //     .get("/api/orders")
  //     .set("Authorization", `Bearer ${adminToken}`);
  //   expect(res.status).toBe(200);
  // });

  // test("should create a new order", async () => {
  //   const res = await request(app)
  //     .post("/api/orders")
  //     .set("Authorization", `Bearer ${userToken}`) // Use the userToken here
  //     .send(mockOrder);

  //   expect(res.status).toBe(201);
  //   expect(res.body.data.totalAmount).toBe(mockOrder.totalAmount);
  // });

  test("should retrieve an order by ID", async () => {
    const order = new Order(mockOrder);
    await order.save();

    const res = await request(app).get(`/api/orders/${order._id}`);
    expect(res.status).toBe(200);
    expect(res.body.data.totalAmount).toBe(mockOrder.totalAmount);
  });

  // test("should update an order's status", async () => {
  //   const order = new Order(mockOrder);
  //   await order.save();

  //   const updatedStatus = { status: OrderStatus.SHIPPED };
  //   const res = await request(app)
  //     .put(`/api/orders/${order._id}`)
  //     .set("Authorization", `Bearer ${adminToken}`) // Use the adminToken here
  //     .send(updatedStatus);

  //   expect(res.status).toBe(200);
  //   expect(res.body.data.status).toBe(OrderStatus.SHIPPED);
  // });

  // test("should delete an order", async () => {
  //   const order = new Order(mockOrder);
  //   await order.save();

  //   const res = await request(app)
  //     .delete(`/api/orders/${order._id}`)
  //     .set("Authorization", `Bearer ${adminToken}`); // Use the adminToken here

  //   expect(res.status).toBe(200);
  //   expect(res.body.message).toBe("Order removed");
  // });
});
