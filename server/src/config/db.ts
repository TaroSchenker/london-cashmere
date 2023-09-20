import mongoose from "mongoose";
import { seedDatabase } from "./seedData"; // Import the seedDatabase function

const connectDB = async (): Promise<void> => {
  if (process.env.NODE_ENV !== "test") {
    try {
      // Try connecting to Atlas first
      const conn = await mongoose.connect(process.env.MONGO_URI as string);
      console.log(`MongoDB connected to Atlas: ${conn.connection.host}`);
    } catch (error) {
      console.error("Error connecting to Atlas:", error);
      console.log("Falling back to local database.");

      // Connect to local database
      const conn = await mongoose.connect(
        "mongodb://localhost:27017/london-cashmere"
      );
      console.log(
        `MongoDB connected to local database: ${conn.connection.host}`
      );

      // Seed the local database
      await seedDatabase();
    }
  }
};

export default connectDB;
