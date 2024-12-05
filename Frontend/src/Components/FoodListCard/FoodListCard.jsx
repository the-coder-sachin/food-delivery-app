import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';

const FoodListCard = ({img, name, price, desc, category, rating, id}) => {

    const {cartItem, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <>
      <div className="card w-[280px] border p-4 rounded-3xl bg-slate-950 flex justify-center items-center flex-col">
        <div className="img">
          <img
            src={img}
            className="size-52 rounded-3xl object-cover border-2 border-dotted p-1"
            alt="img"
          />
        </div>
        <div className="flex w-full px-4 justify-between items-center">
          <h2 className="name text-xl font-bold mt-2">{name}</h2>
          <div className="text-yellow-200 text-sm ">
            {rating.toFixed(2)}
            <sup className="text-sm">★</sup>
          </div>
        </div>
        <div className="price text-purple-400 text-xl w-full px-5 flex justify-center relative">
          <div>
            <span className="text-green-300">₹</span>
            {price}
          </div>
        </div>
        <p className="desc text-gray-400 text-xs italic text-center mb-3">
          {desc}
          <span className="category text-sm text-red-500">({category})</span>
        </p>
        {!cartItem[name] ? (
          <button
            onClick={() => addToCart(name)}
            className="bg-orange-400 w-40 px-4 py-2 rounded-lg font-bold"
          >
            Add To Cart
          </button>
        ) : (
          <div className="flex justify-evenly border w-40 p-2 rounded-lg border-orange-400">
            <button
              className="bg-red-100 text-red-600 size-6 rounded-full text-xl flex justify-center items-center"
              onClick={() => removeFromCart(name)}
            >
              -
            </button>
            <p
            className='font-bold select-none'
            >{cartItem[name]}</p>
            <button
              className="bg-green-200 text-green-600 size-6 rounded-full text-xl flex justify-center items-center"
              onClick={() => addToCart(name)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default FoodListCard