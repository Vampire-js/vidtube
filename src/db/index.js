import mongoose from "mongoose"
import { DB_NAME, DB_URI } from "../constants.js"

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${DB_URI}/${DB_NAME}`)
        console.log("Connected!")
    } catch (error) {
        console.log(error)
        
    }
}

export default connectDB