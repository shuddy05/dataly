import React from "react";
import Button from "./Button";
import { cardContents } from "./data";

const Products = () => {
  return (
    <div className="w-full py-[10rem] px-2 bg-white">
      <div className="layout grid md:grid-cols-3 gap-8">
        {cardContents.map((card) => {
          return (
            <div
              key={card.id}
              className={`${card.cardbg} shadow-xl w-full p-4 my-4 rounded-lg hover:scale-105 duration-300 `}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-20 mx-auto mt-[-3rem]"
              />
              <h1 className="text-center font-bold text-3xl m-8">
                {card.title}
              </h1>
              <p className="text-center font-bold text-4xl m-10">
                {card.price}
              </p>
              <p className="text-center font-semibold text-md my-2">
                {card.storage} Storage
              </p>
              <hr className="text-gray-200 w-[80%] block mx-auto " />
              <p className="text-center font-semibold text-md my-2">{`${card.user} Granted User`}</p>
              <hr className="text-gray-200 w-[80%] block mx-auto " />
              <p className="text-center font-semibold text-md my-2">{`Send up to${card.gig} GB `}</p>
              <hr className="text-gray-200 w-[80%] block mx-auto " />
              <Button
                content={"Start Trial"}
                type={"button"}
                className={
                  "bg-green-400 text-black my-8 hover:bg-green-600 block  mx-auto "
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
