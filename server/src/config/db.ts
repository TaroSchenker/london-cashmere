//SETTINGS FOR MONGO ATLAS
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
    console.log("trying to dv", process.env.MONGO_URI)
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || '');
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;

//SETTINGS FOR MONGO LOCAL
// import mongoose from 'mongoose';

// const connectDB = async (): Promise<void> => {
//   try {
//     const conn = await mongoose.connect(
//       'mongodb://localhost:27017/outageOutrage',
//     );
//     console.log(`MongoDB local connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// export default connectDB;
