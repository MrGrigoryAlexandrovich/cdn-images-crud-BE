import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import imageRoutes from "./routes/images";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/images", imageRoutes);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
