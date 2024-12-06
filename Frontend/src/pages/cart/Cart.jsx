import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const { foodList, cartItem, setCartItem, addToCart, removeFromCart } =
    useContext(StoreContext);
    console.log(cartItem);
    
  return (
    <div>Cart</div>
  )
}

export default Cart