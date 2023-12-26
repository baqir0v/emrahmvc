import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import router from "./src/routes/userRoute.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

dotenv.config()
const port = process.env.PORT
const password = process.env.PASSWORD
const url = process.env.CONNECTION_URL.replace("<password>",password)

app.use("/api/user", router)

mongoose.connect(url)
.then(res=>console.log("Rehim connected"))
.catch(err =>console.log(`Rehim yox ${err}`))

app.listen(port,()=>{
    console.log(`Rehimin nece yasi var? -${port}`);
})

