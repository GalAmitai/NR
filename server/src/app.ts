import "dotenv/config";
import express, { Router } from "express";
import cors from "cors";
import morgan from "morgan";

import hcRouter from "./routes/healthcheck";
import productsRouter from "./routes/products";

const app = express();
const port = process.env.PORT || 3000;

// Simple logging for each req
app.use(morgan("tiny"));
app.use(cors());

// Register routes
app.use("/", hcRouter);
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`Server is running om port: http://localhost:${port}.`);
});
 