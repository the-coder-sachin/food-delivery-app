import React, { useContext, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const LoginPopup = ({ setShowLoginPopup }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const navigate = useNavigate()
  
  const {url, token, setToken} = useContext(StoreContext)
  const [data, setData] = useState({
    name:'',
    email:'',
    password:''
  });

  const onChangeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setData(data=>({...data, [name]:value}))
  }

  const clearForm = () =>{
    setData({
      name:'',
      email:'',
      password:''
    })
  }

  const onsubmitHandler = async (e)=>{
    e.preventDefault()
    console.log(data);
    let newURL = url;
    if(currentState === 'Sign Up'){
      newURL += `/api/user/register`
    }else{
      newURL += `/api/user/login`
    }
    console.log(newURL);
    
    try {
      const response = await axios.post(newURL, data);
      console.log(response.data);
      
      if(response.data.success){
        console.log(currentState);
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token)
        navigate('/')
        setShowLoginPopup(false)
        clearForm()
      }else{
        alert(response.data.message)
      }
    } catch (error) {
      alert('something went wrong')
    }
  }
  return (
    <div className="w-full h-full absolute z-10 left-0 bg-[#000000c9] flex justify-center items-center">
      <form onSubmit={onsubmitHandler} className="bg-gray-950 p-4 w-72 sm:w-96 ">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">{currentState}</h1>
          <RxCross2 
          onClick={()=>{setShowLoginPopup(false)}}
          className="text-2xl cursor-pointer hover:animate-spin" />
        </div>
        <div className="inputs flex flex-col gap-3 mt-4 px-4">
          {currentState === "Sign Up" && (
            <input
              className="pl-2 p-2 rounded-md bg-gray-900 text-sm outline-none"
              type="text"
              placeholder="name"
              name='name'
              value={data.name}
              onChange={onChangeHandler}
              required
            />
          )}
          <input
            className="pl-2 p-2 rounded-md bg-gray-900 text-sm outline-none"
            type="email"
            placeholder="email"
            name='email'
            value={data.email}
            onChange={onChangeHandler}
            required
          />
          <input
            className="pl-2 p-2 rounded-md bg-gray-900 text-sm outline-none"
            type="password"
            placeholder="password"
            name='password'
            value={data.password}
            onChange={onChangeHandler}
            required
          />
        </div>
        {currentState === "Sign Up" && (
          <div className="pl-5 mt-3 flex items-center w-full">
            <input type="checkbox" required />
            <p className="text-xs ml-2">I agree to the Terms & Conditions</p>
          </div>
        )}
        <div className="p-3">
          <button
            className={
              currentState === "Sign Up"
                ? "bg-green-500 p-2 w-full rounded-md font-bold mt-1"
                : "bg-blue-500 p-2 w-full rounded-md font-bold mt-1"
            }
          >
            {currentState === "Login" ? "Login" : "Create Account"}
          </button>
        </div>
        {currentState === "Login" ? (
          <div className="text-green-100 text-center text-sm">
            Create a new account?
            <span
              className="text-blue-400 cursor-pointer ml-2"
              onClick={() => {setCurrentState("Sign Up");
                clearForm()
              }}
            >
              Click here
            </span>
          </div>
        ) : (
          <div className="text-orange-100 text-center text-sm">
            Already have an account?
            <span
              className="text-blue-400 cursor-pointer ml-2"
              onClick={() => {setCurrentState("Login")
                clearForm()
              }}
            >
              Login here
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginPopup