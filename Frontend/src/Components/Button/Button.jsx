import React from 'react'

const Button = ({children}) => {
  return (
    <button className="border text-xs rounded-3xl px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-2 md:text-[16px] hover:bg-slate-100 hover:text-black ">
      {children}
    </button>
  );
}

export default Button