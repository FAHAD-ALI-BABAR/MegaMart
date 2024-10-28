import { createSlice} from "@reduxjs/toolkit"
import img1 from "../images/1.jpg"
import itemslist from "../data/items.js"
const bagslice=createSlice({
    name:"bag",
    initialState:["001"],
    reducers:{
        addtobag:(store,action)=>{
            return store.push(action.payload)
        },
        removefrombag:(store,action)=>{
           return store.filter(itemid=> itemid!==action.payload)
        }
    }
})
export const bagliceaction=bagslice.actions
export default bagslice