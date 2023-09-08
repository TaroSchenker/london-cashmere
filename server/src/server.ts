import app from "./app";
import connectDb from "./config/db";

const port = process.env.PORT || 3001;

// Initiate the DB connection first
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
