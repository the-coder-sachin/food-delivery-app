import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const List = () => {
  const url = 'http://localhost:4000';

  const [foodList, setFoodList] = useState([])
  
  const fetchData = async ()=>{
    
    const response = await axios.get(`${url}/api/food/list`)
    if(response.data.success){
      console.log(response.data.data);
      setFoodList(response.data.data)
    }else{
      toast.error(`Error: 400 "Loading Failed"`)
    }
  }

  const removeFood = async (id) =>{
    console.log(id);
    
    const response = await axios.post(`${url}/api/food/remove`, {id});
    console.log(response);
    if(response.data.success){
      fetchData()
      toast.success(`you removed an item from your menu`)
    }else{
      toast.error(`unable to remove right now!`)
    }
    
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className='w-full'>
      <p className='text-center mt-3 text-gray-300 animate-pulse'>Your Menu</p>
      <div className="container p-4">
        <div className="titles flex justify-between text-gray-300 border border-gray-700 p-2 text-sm select-none">
          <b className='w-full text-center'>Image</b>
          <b className='w-full text-center'>Name</b>
          <b className='w-full text-center'>Category</b>
          <b className='w-full text-center'>Price</b>
          <b className='w-full text-center'>action</b>
        </div>
        {foodList.map((item, index)=>{
          return (
              <div
                key={item._id}
                className="flex justify-between items-center p-2 text-sm select-none border border-zinc-700 text-gray-400"
              >
                <div className="img w-full">
                  <img
                    src={`${url}/images/${item.image}`}
                    alt="img"
                    className="h-9 m-auto"
                  />
                </div>
                <p className="w-full text-center">{item.name}</p>
                <p className="w-full text-center">{item.category}</p>
                <p className="w-full text-center">₹{item.price}</p>
                <p className="w-full text-center">
                  <button 
                  onClick={()=>removeFood(item._id)}
                  className="bg-red-600 text-red-100 px-4 py-1 rounded-md hover:bg-red-700">
                    remove
                  </button>
                </p>
              </div>
          );
        })}
      </div>
    </div>
  )
}

export default List