import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Bag from './pages/Bag.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/bag' element={<Bag/>}/>
    </Routes>
    </>
  )
}

export default App
