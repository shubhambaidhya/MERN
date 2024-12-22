import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shubhambaidhya7:shubham465397@cluster0.ds5oge3.mongodb.net/kec-b4-netflix?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed....");
    console.log(error.message);
  }
};
export default connectDB;
