import express from "express";
import bodyParser from "body-parser";
import { config as dotenvConfig } from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
import morgan from "morgan";

// Import routers
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";

dotenvConfig();

const app = express();

// const corsOptions = {
//   origin: "http://localhost:3000",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204
// };

app.use(helmet()); // set HTTP headers for security. See https://helmetjs.github.io/
// app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.json()); // parse JSON body
app.use(mongoSanitize()); // protect against NoSQL Injection attacks
app.use(hpp()); // protect against HTTP Parameter Pollution attacks
app.use(morgan("combined")); // logging middleware, use "tiny" or "combined" for different levels of logging. use  tiny for production, combined for development. combined reveals sensitive information.

// Set rate limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});
app.use("/api/", apiLimiter);

// Use routers
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.use("/", (req, res) => {
  res.send("API is running");
});

export default app;
