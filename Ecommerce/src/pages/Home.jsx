import Footer from "../components/Footer"
import Header from "../components/Header"
import Displayitems from "../components/Displayitems"
import { useSelector } from "react-redux"
const Home = () => {
    const listitems1=useSelector(store=>store.items)
    console.log("itemslist 1 is:",listitems1);
    
  return (
    <>
    <Header/>
    <main>
    <div className="items-container">
    <Displayitems items={listitems1}/>
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