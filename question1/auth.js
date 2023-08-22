import axios from "axios"
import "dotenv/config"

export const getAuthToken = async ()=>{
const url = "http://20.244.56.144/train/auth"
const payload = {
    "companyName":"Faizan's Train Service",
    "ownerName":"Faizan Syed",
    "rollNo":"RA2011026010201",
    "ownerEmail":"sf9267@srmist.edu.in",
    "clientID": process.env.CLIENT_ID,
    "clientSecret": process.env.CLIENT_SECRET
  }

  console.log("HIT")
  const data = await axios.post(url, payload)
  return data.data.access_token
}