import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
// mongoose.set('debug', true);

async function db_connect() {
    try {
        console.log("Attempting to connect to MongoDB...");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Error connecting to the database:", err.message);
    }
}

export default db_connect;
