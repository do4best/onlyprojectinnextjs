import mongoose from "mongoose";


export async function dbConfig() {
    try {
mongoose.connect(process.env.MONGO_URL)
        mongoose.connection.on("connected", () => {})
    }catch (e) {
        console.log(e.message)
    }
}