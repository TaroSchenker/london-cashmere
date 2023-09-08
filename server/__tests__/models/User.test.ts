import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { User } from "../../src/models/User";
import { UserRole } from "../../src/types";

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
  await User.init();
});

beforeEach(async () => {});

afterEach(async () => {
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});
describe("User Model", () => {
  const mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    hashedPassword: "hashed_password_here",
    address: "123 Main St",
    orderHistory: [],
    role: UserRole.CUSTOMER,
  };

  afterEach(async () => {
    await User.deleteMany({});
  });

  test("create & save user successfully", async () => {
    const user = new User(mockUser);
    const savedUser = await user.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe(mockUser.name);
    expect(savedUser.email).toBe(mockUser.email);
    expect(savedUser.role).toBe(UserRole.CUSTOMER);
  });
  test("insert user without required field should fail", async () => {
    const userWithoutRequiredField = new User({ name: "John Doe" });
    let err: any;
    try {
      await userWithoutRequiredField.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
  });

  test("create user with existing email should fail", async () => {
    // Save the mock user
    await new User(mockUser).save();

    // Try to save another user with the same email
    await expect(new User(mockUser).save()).rejects.toHaveProperty(
      "code",
      11000
    );
  });

  test("create user without role should default to CUSTOMER", async () => {
    const userWithoutRole = new User({
      name: "Jane Doe",
      email: "jane.doe@example.com",
      hashedPassword: "hashed_password_here",
      address: "456 Elm St",
      orderHistory: [],
    });
    const savedUserWithoutRole = await userWithoutRole.save();

    expect(savedUserWithoutRole.role).toBe(UserRole.CUSTOMER);
  });
});
