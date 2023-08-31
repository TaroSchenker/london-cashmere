import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { Product, IProductDocument } from "../../src/models/Product";

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
  await Product.init(); 
});

afterEach(async () => {
  await Product.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Product Model", () => {
  const mockProduct = {
    name: "Sample Shoe",
    description: "This is a sample shoe for testing.",
    price: 100,
    size: ["M", "L"],
    color: ["Red", "Blue"],
    imageUrl: "http://example.com/sample.jpg",
    stockCount: 10
  };

  test("create & save product successfully", async () => {
    const product = new Product(mockProduct);
    const savedProduct = await product.save();

    expect(savedProduct._id).toBeDefined();
    expect(savedProduct.name).toBe(mockProduct.name);
    expect(savedProduct.description).toBe(mockProduct.description);
    expect(savedProduct.price).toBe(mockProduct.price);
    expect(savedProduct.size).toEqual(expect.arrayContaining(mockProduct.size));
    expect(savedProduct.color).toEqual(expect.arrayContaining(mockProduct.color));
    expect(savedProduct.imageUrl).toBe(mockProduct.imageUrl);
    expect(savedProduct.stockCount).toBe(mockProduct.stockCount);
  });

  test("insert product without required field should fail", async () => {
    const productWithoutRequiredField = new Product({ name: "Incomplete Product" });
    let err: any;
    try {
      await productWithoutRequiredField.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
  });

  test("insert product with invalid data should fail", async () => {
    const invalidProduct = new Product({ ...mockProduct, price: "one hundred" });
    let err: any;
    try {
      await invalidProduct.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
  });

  // Add more tests as necessary
  test("insert product with empty strings should fail", async () => {
    const productWithEmptyStrings = new Product({
      name: "",
      description: "",
      price: 100,
      size: ["", ""],
      color: ["", ""],
      imageUrl: "",
      stockCount: 10
    });
  
    await expect(productWithEmptyStrings.save()).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
  });

  test("insert product with negative stockCount should fail", async () => {
    const productWithNegativeStock = new Product({
      ...mockProduct,
      stockCount: -5
    });
  
    await expect(productWithNegativeStock.save()).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
  });

  test("insert product with excessively long name should fail", async () => {
    const productWithLongName = new Product({
      ...mockProduct,
      name: "a".repeat(1001)
    });
  
    await expect(productWithLongName.save()).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
  });

//   test("insert product without colors should fail", async () => {
//     const productWithoutColor = new Product({
//       ...mockProduct,
//       color: []
//     });
  
//     await expect(productWithoutColor.save()).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
//   });

  test("insert product with negative price should fail", async () => {
    const productWithNegativePrice = new Product({
      ...mockProduct,
      price: -100
    });
  
    await expect(productWithNegativePrice.save()).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
  });
  
  test("insert product with excessively long name should fail", async () => {
    const productWithLongName = new Product({
      ...mockProduct,
      name: "a".repeat(1001)
    });
  
    await expect(productWithLongName.save()).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
  });

  test("insert product with non-url imageUrl should fail", async () => {
    const productWithNonUrlImage = new Product({
      ...mockProduct,
      imageUrl: "invalidImageUrl"
    });
  
    // This assumes you have some URL validation in place.
    await expect(productWithNonUrlImage.save()).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
  });
  

  test("insert product with zero stock should be successful", async () => {
    const productWithZeroStock = new Product({
      ...mockProduct,
      stockCount: 0
    });
  
    const savedProduct = await productWithZeroStock.save();
    expect(savedProduct.stockCount).toBe(0);
  });

  
  
  
  
});
