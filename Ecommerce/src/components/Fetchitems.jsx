import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const Fetchitems = () => {
    const fetchStatus=useSelector(store=>store.fetchstatus);
    console.log(fetchStatus);
    useEffect(()=>{
        if(fetchStatus.fetchdone){
            return;
        }
        const controller=new AbortController();
        const signal=controller.signal;
        fetch("http://localhost:8080/items",{signal}).then((res)=>res.json()).then((items)=>{
console.log("items fetced", items);

        })
        return ()=>{
            console.log("cleaning up the useeffect");
            controller.abort();
        }
    },[fetchStatus])
    
  return (
    <div>Fetchitemsdone :{fetchStatus.fetchdone}
    Fetchingdata:{fetchStatus.fetchingdata}</div>
  )
}

export default Fetchitems