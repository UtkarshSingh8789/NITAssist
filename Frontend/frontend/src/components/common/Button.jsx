import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto, className }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-white text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold ${
          active ? "bg-gradient-to-r from-cyan-500 to-blue-500 ... text-black" : "bg-black"
        } hover:shadow-none hover:scale-95 transition-all duration-200 ${className} `}
        style={{ color: active ? 'black' : 'white' }}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;