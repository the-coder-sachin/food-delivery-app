import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';

const FoodListCard = ({img, name, price, desc, category, rating, id}) => {

    const {cartItem, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <>
      <div className="card border lg:min-w-[256px] p-2 rounded-3xl bg-slate-950 flex justify-center items-center flex-col">
        <div className="img">
          <img
            src={img}
            className="w-48 h-32 md:h-36 md:w-56 rounded-3xl object-cover border-2 border-dotted p-1"
            alt="img"
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <h2 className="name text-nowrap md:text-xl font-bold mt-2">{name}</h2>
          <div className="text-yellow-200 text-sm ">
            {rating.toFixed(2)}
            <sup className="text-sm">★</sup>
          </div>
        </div>

        <p className="desc w-48 text-gray-400 text-xs italic text-center mb-3">
          {desc}
          <span className="category text-sm text-red-500">({category})</span>
        </p>
        {!cartItem[name] ? (
          <div className='flex w-48 items-center justify-center gap-2'>
            <div className="price text-purple-400 text-lg md:text-xl flex justify-center">
              <div>
                <span className="text-green-300">₹</span>
                {price}
              </div>
            </div>
            <button
              onClick={() => addToCart(name)}
              className="bg-orange-400 text-xs w-28 md:text-[16px] md:w-40 px-4 py-2 rounded-lg font-bold"
            >
              Add To Cart
            </button>
          </div>
        ) : (
          <div className="flex justify-evenly border w-40 p-2 rounded-lg border-orange-400">
            <button
              className="bg-red-100 text-red-600 size-6 rounded-full text-xl flex justify-center items-center"
              onClick={() => removeFromCart(name)}
            >
              -
            </button>
            <p className="font-bold select-none">{cartItem[name]}</p>
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