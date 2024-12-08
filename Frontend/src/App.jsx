import { useEffect, useRef, useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import Cart from './pages/cart/Cart';
import Footer from './Components/Footer/Footer';
import LoginPopup from './Components/LoginPopup/LoginPopup';

function App() {
   const [showLoginPopup, setShowLoginPopup] = useState(false)
 
  


  return (
    <>
      <div className="app w-[90%] sm:w-4/5 m-auto overflow-hidden ">
        {showLoginPopup ? (
          <LoginPopup setShowLoginPopup={setShowLoginPopup} />
        ) : (
          <></>
        )}
        <Navbar setShowLoginPopup={setShowLoginPopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App
