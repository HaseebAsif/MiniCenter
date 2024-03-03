import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={` text-white py-2 px-6 rounded md:ml-8 duration-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
