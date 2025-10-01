import mongoose from "mongoose";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


export async function dbConfig() {
    try {
mongoose.connect(process.env.MONGO_URL)

        mongoose.connection.on("connected", () => {
            console.log("DB connected")
        })
        mongoose.connection.on("error", (err) => {
            console.log(err.message)
            process.exit(1)
        })
    }catch (e) {
        console.log(e.message)
    }
}