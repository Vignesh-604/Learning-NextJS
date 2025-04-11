import mongoose from "mongoose";

export default async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)    // ! specifies that value won't be null or undefined

        mongoose.connection.on('connected', () => console.log("MongoDB connected!!"))

        mongoose.connection.on('error', (e) => {
            console.log("MongoDB connection error:", e)
            process.exit()
        })
        
    } catch (error) {
        console.log("Database connection error:", error)
    }
}