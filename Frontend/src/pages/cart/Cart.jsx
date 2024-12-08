import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { RxCross2 } from "react-icons/rx";
import { logo } from '../../assets/assets';

const Cart = () => {
  const { foodList, cartItem, setCartItem, addToCart, removeFromCart, removeAllFromCart, subTotalCart, } =
    useContext(StoreContext);

  const [deliveryCharges, setDeliveryCharges] = useState(0.00);
  const [GST, setGST] = useState(0);
  const [subTotal, setSubTotal] = useState(0)

  useEffect(()=>{
    if(subTotalCart()>0){
      setSubTotal(subTotalCart().toFixed(2))
      setDeliveryCharges(35.00)
      setGST((subTotalCart()*0.05).toFixed(2))
    }else{
      setSubTotal(prev=>0);
      setDeliveryCharges(prev=>0);
      setGST(prev=>0)
    }
  }, [subTotalCart, addToCart])
    
  return (
    <>
      <div className="cart mt-7">
        <div className="cart-items">
          <div className="cart-items-title flex text-xs justify-between my-3 md:text-lg">
            <p className=" w-full text-teal-400">items</p>
            <p className=" w-full hidden sm:block text-blue-300">title</p>
            <p className=" w-full text-center text-yellow-300">price</p>
            <p className=" w-full text-center text-pink-400">quantity</p>
            <p className=" w-full text-center text-green-300">total</p>
            <p className=" w-full text-center text-red-500">remove</p>
          </div>
          <hr className="mb-2" />
          {foodList.map((item, index) => {
            if (cartItem[item.id]) {
              return (
                <div key={index}>
                  <div className="flex text-xs md:text-lg justify-between items-center">
                    <div className="img hidden sm:block w-full">
                      <img
                        src={item.img}
                        className="h-16 w-20 object-cover rounded-md border p-1"
                        alt="img"
                      />
                    </div>
                    <p className="title w-full h-full text-blue-300">
                      {item.name}
                    </p>
                    <p className="price text-center w-full text-yellow-300">
                      ₹{item.price}
                    </p>
                    <div className="quantity w-full text-pink-400 flex items-center justify-center">
                      <button
                        onClick={() => {removeFromCart(item.id)}}
                        className="mr-2 sm:text-xl bg-red-200 text-red-500 rounded-full size-4 sm:size-5 flex justify-center items-center"
                      >
                        -
                      </button>
                      <div className="sm:m-2">{cartItem[item.id]}</div>
                      <button
                        onClick={() => {
                          addToCart(item.id);
                        }}
                        className="m-2 sm:text-xl text-green-500 bg-green-100 rounded-full size-4 sm:size-5 flex justify-center items-center"
                      >
                        +
                      </button>
                    </div>
                    <p className="total w-full text-center text-green-300">
                      ₹{item.price * cartItem[item.id]}
                    </p>
                    <div
                      onClick={() => removeAllFromCart(item.id)}
                      className="remove flex justify-center w-full text-red-500 cursor-pointer"
                    >
                      <RxCross2 className="ml-4 active:animate-click hover:animate-spin bg-red-200 hover:bg-transparent hover:text-3xl rounded-full size-5 p-1" />
                    </div>
                  </div>
                  <hr className="my-2" />
                </div>
              );
            }
          })}
        </div>
        <div className="cart-value flex flex-col-reverse sm:flex-row">
          <div className="left w-full p-4">
            <h2 className='mb-2 text-xl font-bold'>Your Cart</h2>
            <div className="flex justify-between text-gray-400 text-sm">
              <p>SubTotal :</p>
              <p>₹{subTotal}</p>
            </div>
            <hr className='my-2' />
            <div className="flex justify-between text-gray-400 text-sm">
              <p>Delivery Fee :</p>
              {/* <p>₹{subTotalCart()>0?35:0}</p> */}
              <p>₹{deliveryCharges}</p>
            </div>
            <hr className='my-2' />
            <div className="flex justify-between text-gray-400 text-sm">
              <p>GST (5%):</p>
              {/* <p>₹{subTotalCart()*0.05}</p> */}
              <p>₹{GST}</p>
            </div>
            <hr className='my-2' />
            <div className="flex justify-between text-gray-200">
              <b>Total Amount :</b>
              <b>₹{(subTotalCart() + deliveryCharges + subTotalCart()*0.05).toFixed(0)}</b>
            </div>
            <hr className='my-2' />
            <button className='bg-orange-600 p-2 px-5 rounded-md'>proceed to pay</button>
          </div>
          <div className="right w-full p-4 flex justify-center items-center flex-col">
            <p className='text-gray-200 text-nowrap mb-2 text-xs sm:text-[16px]'>Enter to prome code for extra discount</p>
            <div className="input flex flex-col rounded-lg max-w-80 sm:flex-row w-full overflow-hidden">
              <input type="text" className='bg-gray-900 outline-none p-2 pl-3 w-full' placeholder='promo code' />
              <button className='bg-white text-black p-2'>submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart