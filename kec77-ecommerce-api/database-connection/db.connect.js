import mongoose from 'mongoose';

const dbUserName = process.env.DB_USERNAME;
const dbPassword = encodeURIComponent(process.env.DB_PASSWORD);
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbOptions = process.env.DB_OPTIONS;

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUserName}:${dbPassword}@${dbHost}/${dbName}?${dbOptions}`
    );
    console.log('DB connection established...');
  } catch (error) {
    console.log('DB connection failed...');
    console.log(error.message);
    process.exit(1); //1 => exit with error
  }
};

export default connectDB;
