import { rest } from "msw";
import { IOrder, IProduct, IUser, OrderStatus, UserRole } from "../../types";

// Mock data for /api/orders
const mockOrders: IOrder[] = [
  {
    _id: "order1",
    customerDetails: {
      name: "John Doe",
      email: "john@example.com",
      address: "123 Main St, City, Country",
    },
    orderedProducts: [
      {
        productId: "product1",
        quantity: 2,
      },
      {
        productId: "product2",
        quantity: 1,
      },
    ],
    totalAmount: 200,
    status: OrderStatus.PENDING,
    paymentId: "pay12345",
  },
];

// Mock data for /api/products
const mockProducts: IProduct[] = [
  {
    _id: "product1",
    name: "T-Shirt",
    description: "A cool t-shirt",
    price: 50,
    size: ["S", "M", "L"],
    color: ["Red", "Blue"],
    imageUrl: "http://example.com/t-shirt.jpg",
    stockCount: 100,
  },
  {
    _id: "product2",
    name: "Hat",
    description: "A nice hat",
    price: 30,
    size: ["M", "L"],
    color: ["Black", "White"],
    imageUrl: "http://example.com/hat.jpg",
    stockCount: 50,
  },
];

// Mock data for /api/users/register and /api/users/login
const mockUser: IUser = {
  _id: "user1",
  name: "John Doe",
  email: "john@example.com",
  address: "123 Main St, City, Country",
  orderHistory: ["order1"],
  role: UserRole.CUSTOMER,
};

const mockUsers: IUser[] = [
  {
    _id: "user1",
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St, City, Country",
    orderHistory: ["order1"],
    role: UserRole.CUSTOMER,
  },
  {
    _id: "user2",
    name: "Jane Smith",
    email: "jane@example.com",
    address: "456 Another St, City, Country",
    orderHistory: [],
    role: UserRole.CUSTOMER,
  },
];

export const handlers = [
  // Mocking the /orders endpoint
  rest.get("http://localhost:3001/api/orders", (req, res, ctx) => {
    return res(ctx.json(mockOrders));
  }),
  rest.get("http://localhost:3001/api/orders/:id", (req, res, ctx) => {
    const order = mockOrders.find(
      (orderFind) => orderFind._id === req.params.id,
    );
    return res(ctx.json(order));
  }),
  rest.post("http://localhost:3001/api/orders", (req, res, ctx) => {
    return res(
      ctx.json({
        /* mock order creation data - need to implement on server first */
      }),
    );
  }),
  rest.put("http://localhost:3001/api/orders/:id", (req, res, ctx) => {
    return res(
      ctx.json({
        /* mock order update data  - need to implement on server first*/
      }),
    );
  }),
  // Mocking the /products endpoint
  rest.get("http://localhost:3001/api/products", (req, res, ctx) => {
    return res(ctx.json(mockProducts));
  }),
  rest.get("http://localhost:3001/api/products/:id", (req, res, ctx) => {
    const product = mockProducts.find(
      (productFind) => productFind._id === req.params.id,
    );
    return res(ctx.json(product));
  }),
  rest.post("http://localhost:3001/api/products", (req, res, ctx) => {
    return res(
      ctx.json({
        /* mock product creation data */
      }),
    );
  }),
  rest.put("http://localhost:3001/api/products/:id", (req, res, ctx) => {
    return res(
      ctx.json({
        /* mock product update data */
      }),
    );
  }),
  rest.delete("http://localhost:3001/api/products/:id", (req, res, ctx) => {
    return res(
      ctx.json({
        /* mock product deletion data */
      }),
    );
  }),

  // Mocking the /users endpoint
  rest.post(
    "http://localhost:3001/api/users/register",
    async (req, res, ctx) => {
      const requestBody = await req.json();
      const existingUser = mockUsers.find(
        (user) => user.email === requestBody.email,
      );

      if (existingUser) {
        return res(
          ctx.status(400),
          ctx.json({ message: "User already exists" }),
        );
      }

      return res(
        ctx.status(201),
        ctx.json({
          message: "User registered successfully",
          user: {
            id: mockUser._id,
            name: mockUser.name,
            email: mockUser.email,
          },
        }),
      );
    },
  ),

  rest.post("http://localhost:3001/api/users/login", async (req, res, ctx) => {
    const requestBody = await req.json();
    const userFound = mockUsers.find(
      (user) => user.email === requestBody.email,
    );

    if (!userFound) {
      return res(
        ctx.status(400),
        ctx.json({ message: "Invalid email or password" }),
      );
    }

    // For simplicity, we're not checking the password in the mock handler.
    const mockToken = "mockToken12345";
    return res(
      ctx.json({
        token: mockToken,
        user: {
          id: userFound._id,
          name: userFound.name,
          email: userFound.email,
        },
      }),
    );
  }),
];
