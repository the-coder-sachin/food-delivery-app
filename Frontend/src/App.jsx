import { useEffect, useRef, useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import Cart from './pages/cart/Cart';
import Footer from './Components/Footer/Footer';

function App() {

 
  


  return (
    <>
      <div className="app w-4/5 m-auto overflow-hidden ">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
      </div>
        <Footer/>
    </>
  );
}

export default App
