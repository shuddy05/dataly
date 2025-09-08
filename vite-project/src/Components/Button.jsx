import React from "react";

const Button = ({ content, type, className }) => {
  return (
    <button
      type={type}
      className={`rounded-md w-[200px] py-3 font-medium cursor-pointer ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;
