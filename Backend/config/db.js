import mongoose from "mongoose";

export const connectMongoDB = async () =>{
    await mongoose
      .connect(
        "mongodb+srv://asynccodersachin:p3a1WiL5eGMRJWSO@cluster0.xptk7.mongodb.net/food-delivery"
      )
      .then(() => {
        console.log("db connected successfully");
      });
}