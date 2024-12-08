import React, { useContext, useState, useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {

   const {
     foodList,
     cartItem,
     setCartItem,
     addToCart,
     removeFromCart,
     removeAllFromCart,
     subTotalCart,
   } = useContext(StoreContext);
   const [deliveryCharges, setDeliveryCharges] = useState(0.0);
   const [GST, setGST] = useState(0);
   const [subTotal, setSubTotal] = useState(0);

   useEffect(() => {
     if (subTotalCart() > 0) {
       setSubTotal(subTotalCart().toFixed(2));
       setDeliveryCharges(35.0);
       setGST((subTotalCart() * 0.05).toFixed(2));
     } else {
       setSubTotal((prev) => 0);
       setDeliveryCharges((prev) => 0);
       setGST((prev) => 0);
     }
   }, [subTotalCart, addToCart]);
  return (
    <div className="sm:flex my-11">
      <div className="left sm:w-3/5 sm:pr-10 pt-0">
        <h2 className="text-lg sm:text-2xl font-bold">Add Address</h2>
        <form className="text-sm sm:text-[1rem]">
          <div className="name w-full flex flex-col gap-2 lg:flex-row justify-between p-2">
            <input
              type="text"
              placeholder="First Name"
              className="p-2 bg-slate-900 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-2 bg-slate-900 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="p-2 bg-slate-900 rounded-md m-2 mt-0 outline-none"
            />
            <input
              type="text"
              className="p-2 bg-slate-900 rounded-md mt-0 m-2 outline-none"
              placeholder="Flat / House no / Floor / Building *"
            />
            <input
              className="p-2 bg-slate-900 rounded-md mt-0 m-2 outline-none"
              type="text"
              placeholder="Nearby landmark (optional)"
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-400">save address as : </p>
          <div className="btns flex flex-wrap gap-2 p-2">
            <button className=" px-3 py-2 text-xs bg-slate-600 rounded-md hover:bg-slate-500">
              Home
            </button>
            <button className=" px-3 py-2 text-xs bg-slate-600 rounded-md hover:bg-slate-500">
              Work
            </button>
            <button className=" px-3 py-2 text-xs bg-slate-600 rounded-md hover:bg-slate-500">
              Hotel
            </button>
            <button className=" px-3 py-2 text-xs bg-slate-600 rounded-md hover:bg-slate-500">
              Others
            </button>
          </div>
        </form>
      </div>
      <div className="right mt-4 sm:w-2/5">
        <div className="w-full p-4 flex flex-col">
          <h2 className="mb-2 text-xl font-bold">Your Cart</h2>
          <div className="flex justify-between text-gray-400 text-sm">
            <p>SubTotal :</p>
            <p>₹{subTotal}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-gray-400 text-sm">
            <p>Delivery Fee :</p>
            <p>₹{deliveryCharges}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-gray-400 text-sm">
            <p>GST (5%):</p>
            <p>₹{GST}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-gray-200">
            <b>Total Amount :</b>
            <b>
              ₹
              {(
                subTotalCart() +
                deliveryCharges +
                subTotalCart() * 0.05
              ).toFixed(0)}
            </b>
          </div>
          <hr className="my-2" />
          <button className="bg-orange-600 p-2 px-5 rounded-md">
            proceed to pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder