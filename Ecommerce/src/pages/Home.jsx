import Footer from "../components/Footer"
import Header from "../components/Header"
import Displayitems from "../components/Displayitems"
import {items } from "../data/items"
const Home = () => {
  return (
    <>
    <Header/>
    <main>
    <div className="items-container">
    <Displayitems items={items}/>
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