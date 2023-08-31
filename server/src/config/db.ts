// config/db.ts
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  if (process.env.NODE_ENV !== "test") {
    console.log("trying to connect", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI || '');
    console.log(`MongoDB connected: ${conn.connection.host}`);
  }
};

export default connectDB;
