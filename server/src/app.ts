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

const corsOptions = {
  origin: "https://yourfrontend.com", // Update this to your frontend domain
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(mongoSanitize());
app.use(hpp());
app.use(morgan("combined")); // You can adjust the format ('combined' logs in Apache combined format)

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
