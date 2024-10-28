import {configureStore, createSlice} from "@reduxjs/toolkit"
import img1 from "../images/1.jpg"
import itemslist from "../data/items.js"
import itemslice from "./Itemslice.js"
import fetchslice from "./Fetchstatus.js"
import bagslice from "./Bagstore.js"
// const itemslice=createSlice({
//     name:"items",
//     initialState:itemslist,
//     reducers:{
//         additems:(store,action)=>{
//             return store;
//         }
//     }
// })
// const cartslice=createSlice({
//     name:"cart",
//     initialState:[],
//     reducers:{
//         addtoCart:(store,action)=>{
//             return store;
//         },
//         removefromcart:(store,action)=>{
//       return store;
//         }
//     }

// })
// const wishlistslice=createSlice({
//     name:"wishlist",
//     initialState:[],
//     reducers:{
//         addtowishlist:(store,action)=>{
//            return store; 
//         }
//     }
// })
// const ordersslice=createSlice({
//     name:"orders",
//     initialState:[],
//     reducers:{
//         placeorder:(store,action)=>{
//             return store;
//         }
//     }
// })

const MegaMart=configureStore({
    reducer:{
        //items: will be named in useselector for accessing this
        items:itemslice.reducer,
        fetchstatus:fetchslice.reducer,
        bag:bagslice.reducer
        // cart:cartslice.reducer,
        // wishlist:wishlistslice.reducer,
        // orders:ordersslice.reducer
    }
})
// export const itemsliceactions=itemslice.actions
// export const orderssliceactions=ordersslice.actions
// export const wishlistsliceactions=wishlistslice.actions
// export const cartsliceactions=cartslice.actions
export default MegaMart