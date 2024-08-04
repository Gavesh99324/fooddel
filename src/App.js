import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'


const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Cart/>} />
        <Route path='/' element={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}

export default App
