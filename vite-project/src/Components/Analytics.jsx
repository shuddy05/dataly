import React from "react";
import Button from "./Button";

function Analytics() {
  return (
    <div className="bg-white w-full py-16 px-2">
      <div className="layout grid md:grid-cols-2 gap-5">
        <img
          src="https://dataly-nine.vercel.app/assets/laptop-BkUviYdN.jpg"
          alt="analytics image"
          className="h-full w-full my-4 mx-auto block object-cover"
        />
        <div className="flex flex-col justify-center">
          <p className="text-green-500 font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores
            et cupiditate consequatur, velit vel porro ab. Vel error
            exercitationem doloremque sint consectetur quos dicta odio.
            Distinctio dolor dolorum ducimus non natus. Aperiam, sunt voluptate
            maiores iste inventore quas quaerat ipsam facere doloribus odit sint
            illum labore veritatis provident numquam!
          </p>

          <Button
            content={"Get Started"}
            type={"button"}
            className={
              "bg-black text-green-400 my-6 hover:bg-green-600 hover:text-white"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
