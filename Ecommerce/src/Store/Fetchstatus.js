import { createSlice} from "@reduxjs/toolkit"
import img1 from "../images/1.jpg"
import itemslist from "../data/items.js"
const fetchslice=createSlice({
    name:"fetchstatus",
    initialState:{
        fetchdone:false,
        fetchingdata:false
    },
    reducers:{
        fetchdone:(status)=>{
            return status.fetchdone=true;
        },
        fetchstarted:(status)=>{
            return status.fetchingdata=true;
        },
        fetchfinished:(status)=>{
            return status.fetchingdata=false;
        }
    }
})
export const fetchsliceaction=fetchslice.actions
export default fetchslice