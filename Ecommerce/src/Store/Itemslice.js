import { createSlice} from "@reduxjs/toolkit"
import img1 from "../images/1.jpg"
import itemslist from "../data/items.js"
const itemslice=createSlice({
    name:"items",
    initialState:itemslist,
    reducers:{
        additems:(store,action)=>{
            return store;
        }
    }
})
export const itemsliceactions=itemslice.actions
export default itemslice