import axios from "axios";
import { getAuthToken } from "./auth.js";


export const getTrainDetails = async ()=>{
    const accessToken = await getAuthToken();
    const url = "http://20.244.56.144/train/trains"
    const data = await axios.get(url, {
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    })
    const unwindedTrains=[]

    const trains = data.data
    trains.forEach(train => {
        const bodyAC = {
            "trainName": train.trainName,
            "trainNumber": train.trainNumber,
            "CLASS":"AC",
            "seatsAvailable":train.seatsAvailable.AC,
            "price":train.price.AC,
            "delayedBy": train.delayedBy,
            "departureTime":train.departureTime        
        }
        unwindedTrains.push(bodyAC)
        const bodySleeper = {
            "trainName": train.trainName,
            "trainNumber": train.trainNumber,
            "CLASS":"SLEEPER",
            "seatsAvailable":train.seatsAvailable.sleeper,
            "price":train.price.sleeper,
            "delayedBy": train.delayedBy,
            "departureTime":train.departureTime        
        }
        unwindedTrains.push(bodySleeper)
    });
    const currentTime = Date.now
    unwindedTrains.sort((t1,t2)=>t1.price-t2.price)
    unwindedTrains.sort((t1,t2)=>t2.seatsAvailable-t1.seatsAvailable)
    
    return unwindedTrains
}