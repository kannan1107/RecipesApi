// src/config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      family: 4, // Force IPv4
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Connection Error: ", err.message);
    process.exit(1);
  }
};

export default connectDB; // ✅ ES module export
