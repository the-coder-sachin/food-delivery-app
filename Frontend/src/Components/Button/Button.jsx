import React from 'react'

const Button = ({children}) => {
  return (
    <button className="border rounded-3xl px-4 py-2  hover:bg-slate-100 hover:text-black ">
      {children}
    </button>
  );
}

export default Button