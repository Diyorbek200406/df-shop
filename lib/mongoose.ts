import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false;

export const ConnectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL not found");
  }

  if (isConnected) {
    return;
  }

  try {
    const options: ConnectOptions = { dbName: "df-shop", autoCreate: true };
    await mongoose.connect(process.env.MONGODB_URL, options);
    isConnected = true;
    console.log("Connected To MongoDB");
  } catch (error) {
    console.log("Failed To Connect To MongoDB");
  }
};
