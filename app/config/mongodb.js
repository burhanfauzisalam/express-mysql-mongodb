const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env["DATABASE_URL"]);
    console.log("Database MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
