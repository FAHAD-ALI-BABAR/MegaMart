import Footer from "../components/Footer"
import Header from "../components/Header"
import Displayitems from "../components/Displayitems"
import { useSelector } from "react-redux"
import Fetchitems from "../components/Fetchitems"
import Loading from "../components/Loading"
const Home = () => {
    const listitems1=useSelector(store=>store.items)
    console.log("itemslist 1 is:",listitems1);
    const fetchStatus=useSelector(store=>store.fetchstatus)
    console.log("fetchstatus is:",fetchStatus.fetchingdata);
    
  return (
    <>
    <Header/>
    <main>
      <Fetchitems/>
    <div className="items-container">
      {fetchStatus.fetchingdata ? <Loading/>:<Displayitems items={listitems1}/>}
    
    </div>
    </main>
    <Footer/>
    
 
    {/* <main>
        <div className="items-container">
          <Displayitems items={items}/>
        </div>
    </main>
   <Footer/> */}
    </>
  )
}

export default Home