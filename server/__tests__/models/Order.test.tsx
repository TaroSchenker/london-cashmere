import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { Order } from "../../src/models/Order";

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
  await Order.init(); 
});

afterEach(async () => {
  await Order.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Order Model", () => {
  const mockOrder = {
    customerDetails: {
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Main St, Springfield"
    },
    orderedProducts: [{
      productId: new mongoose.Types.ObjectId(),
      quantity: 2
    }],
    totalAmount: 500,
    status: "Pending",
    paymentId: "PAY123456789"
  };

  test("create & save order successfully", async () => {
    const order = new Order(mockOrder);
    const savedOrder = await order.save();

    expect(savedOrder._id).toBeDefined();
    expect(savedOrder.customerDetails.name).toBe(mockOrder.customerDetails.name);
    expect(savedOrder.customerDetails.email).toBe(mockOrder.customerDetails.email);
    expect(savedOrder.customerDetails.address).toBe(mockOrder.customerDetails.address);
    expect(savedOrder.totalAmount).toBe(mockOrder.totalAmount);
    expect(savedOrder.status).toBe(mockOrder.status);
    expect(savedOrder.paymentId).toBe(mockOrder.paymentId);
  });

  test("insert order without required field should fail", async () => {
    const orderWithoutRequiredField = new Order({
      customerDetails: { 
        name: "John Doe", 
        email: "john.doe@example.com"
      }
    });
    await expect(orderWithoutRequiredField.save()).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
  });

  test("insert order with invalid email should fail", async () => {
    const orderWithInvalidEmail = new Order({
      ...mockOrder,
      customerDetails: {
        ...mockOrder.customerDetails,
        email: "invalidEmail"
      }
    });
    await expect(orderWithInvalidEmail.save()).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
  });

  test("insert order with negative totalAmount should fail", async () => {
    const orderWithNegativeAmount = new Order({
      ...mockOrder,
      totalAmount: -100
    });
    await expect(orderWithNegativeAmount.save()).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
  });

  test("insert order with excessively long name should fail", async () => {
    const orderWithLongName = new Order({
      ...mockOrder,
      customerDetails: {
        ...mockOrder.customerDetails,
        name: "a".repeat(101)
      }
    });
    await expect(orderWithLongName.save()).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
  });

  test("insert order with invalid status should fail", async () => {
    const orderWithInvalidStatus = new Order({
      ...mockOrder,
      status: "InvalidStatus"
    });
    await expect(orderWithInvalidStatus.save()).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
  });



});
