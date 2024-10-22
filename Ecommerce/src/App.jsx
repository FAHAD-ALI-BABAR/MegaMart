import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Displayitems from './components/Displayitems'
import {items} from "./data/items.js"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <main>
        <div className="items-container">
          <Displayitems items={items}/>
        </div>
    </main>
   <Footer/>
    </>
  )
}

export default App
