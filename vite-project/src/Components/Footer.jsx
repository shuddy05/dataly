import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="bg-black  py-16 px-2 text-white ">
      <div className="layout flex flex-col lg:flex-row justify-between gap-10  ">
        <div className="w-full lg:w-1/2">
          <div className="">
            <h1 className="text-green-400 text-4xl font-bold mb-2">DATALY.</h1>
            <p className="w-full">
              Lorem, ipsum dolor sit amet consectetur Id odit adipisicing elit .
              ullam iste repellat consequatur libero reiciendis, blanditiis
              accusantium.
            </p>
            <div className=" w-full flex gap-10 md:gap-20 mt-10">
              <IoLogoFacebook size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
              <FaGithubSquare size={30} />
              <FaDribbbleSquare size={30} />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full lg:w-1/2 gap-2 text-sm ">
          <div className="flex flex-col gap-2 ">
            <p className="text-gray-500 font-bold text-lg  ">Solutions</p>

            <a href="#" className="">
              Analytics
            </a>
            <a href="#" className="">
              Marketing
            </a>
            <a href="#" className="">
              Commerce
            </a>
            <a href="#" className="">
              Insights
            </a>
          </div>

          <div className="flex flex-col gap-2 ">
            <p className="text-gray-500 font-bold text-lg  ">Support</p>

            <a href="#">Pricing</a>
            <a href="#">Documentation</a>
            <a href="#">Guides</a>
            <a href="#">API Status</a>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="text-gray-500 font-bold text-lg  ">Company</p>

            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
            <a href="#">Careers</a>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="text-gray-500 font-bold text-lg  ">Legal</p>

            <a href="#">Claim</a>
            <a href="#">Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
