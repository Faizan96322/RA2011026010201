import express from "express";
import cors from 'cors'
import "dotenv/config"
import { getTrainDetails } from "./utils.js";

(async ()=>{
const app = express()

app.use(cors())
.use(express.json())
.use(express.urlencoded({extended:true}))

app.get('/trains',async (req,res)=>{
    const data = await getTrainDetails()
    res.send(data)
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})
})()