import express from 'express'
import cors from 'cors'


export const app = express()

//Middleware
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))