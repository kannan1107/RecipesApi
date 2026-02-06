// index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import recipeRoutes from "./src/routes/recipeRoutes.js";
import { errorHandler, notFound } from "./src/middlewares/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", recipeRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    // Start the server only after the database connection is successful
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
