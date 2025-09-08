import React from "react";
import Button from "./Button";
export const Hero = () => {
  return (
    <section className="h-[80vh] bg-black text-white flex justify-center items-center ">
      <div className=" layout text-center">
        <h1 className="text-green-400 font-bold ">
          GROWING WITH DATA ANALYTICS
        </h1>
        <h1 className=" text-3xl md:text-7xl font-bold my-4 md:my-10">
          GROW WITH DATA.
        </h1>
        <h1 className=" text-xl md:text-4xl font-bold ">
          Fast, Flexible Financing for{" "}
          <span className="text-gray-600">BTC|</span>
        </h1>
        <h1 className="text-gray-600 font-bold text-md md:text-2xl my-5 ">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms
        </h1>
        <Button
          content={"Get Started"}
          className={"text-black bg-green-400 w-[150px] "}
        />
      </div>
    </section>
  );
};

export default Hero;
