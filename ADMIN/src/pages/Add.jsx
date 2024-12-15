import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = () => {
  const url = `http://localhost:4000`
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: '',
    category: 'indian',
    description:'',
    price:'',
  })

  const onChangeHandler = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setData(data=>({...data, [name]:value}))
  }

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('price', Number(data.price));
    formData.append('image', image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    console.log(response);
    
    if(response.data.success){
      console.log(data);
      setData({
        name: "",
        category: "indian",
        description: "",
        price: "",
      });
      setImage(false)
      toast.success('added successfully!')
      console.log(`success submit`);
    }else{
      console.log(`failed to submit`);
      toast.error('something went wrong please try later')
    }
  }

  useEffect(() => {
    console.log(data);
  }, [data])
  
  return (
    <>
      <form className="flex flex-col items-center gap-2 p-4 w-full text-gray-400 text-xs" onSubmit={onSubmitHandler}>
        <div className="img w-full">
          <p>Upload Image :</p>
          <label htmlFor="image">
            <img
              className={
                image
                  ? `m-auto h-24 mt-2 cursor-pointer rounded-lg border-4 border-white border-dotted`
                  : `m-auto h-24 mt-2 brightness-50 cursor-pointer rounded-lg border-4 border-white border-dotted`
              }
              src={image ? URL.createObjectURL(image) : assets.food}
              alt="uploads"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            name="image"
            hidden
            required
          />
        </div>
        <div className="name w-full">
          <p>Product Name: </p>
          <input
            name="name"
            type="text"
            onChange={onChangeHandler}
            value={data.name}
            required
            className="w-full p-2 mt-2 bg-gray-800 rounded-md text-xs sm:text-base outline-none"
            placeholder="Enter Product Name"
          />
        </div>
        <div className="description w-full">
          <p>Product Description: </p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            id="description"
            required
            className="p-2 mt-2 w-full bg-gray-800 rounded-md resize-none h-20 sm:text-base outline-none"
            placeholder="Add Product Description"
          ></textarea>
        </div>
        <div className="w-full flex flex-wrap gap-2 justify-center">
          <div className="category w-full max-w-36">
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
              id="category"
              required
              className="min-w-10 w-full text-base bg-slate-800 p-2 rounded-md outline-none"
            >
              <option value="indian">indian</option>
              <option value="italian">italian</option>
              <option value="fast food">fast food</option>
              <option value="salad">salad</option>
              <option value="japanese">japanese</option>
              <option value="thai">thai</option>
              <option value="korean">korean</option>
              <option value="mexican">mexican</option>
              <option value="breakfast">breakfast</option>
              <option value="dessert">dessert</option>
              <option value="american">american</option>
              <option value="mediterranean">mediterranean</option>
              <option value="british">chinese</option>
              <option value="russian">russian</option>
              <option value="bakries">bakeries</option>
              <option value="beverages">beverages</option>
            </select>
          </div>
          <div className="price w-fit">
            <span className="text-base font-bold m-2">₹</span>
            <input
              type="number"
              onChange={onChangeHandler}
              value={data.price}
              className="w-20 rounded-md bg-slate-800 p-2 text-sm outline-none"
              name="price"
              placeholder="0"
              required
            />
          </div>
          <button className="btn active:animate-click bg-orange-600 text-white py-2 px-4 font-bold rounded-md">
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default Add