import React from "react";
import { BsArrowUp } from "react-icons/bs";
import { useState, useEffect } from "react";
const BacktoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const height = window.innerHeight;
      setIsVisible(scrollPosition > height);
    };
    /// Attach out scroll listener
    window.addEventListener("scroll", handleScroll);
    // Clean up func
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <a href="toTop">
        <button className=" hidden  h-15 w-15 bg-green-900 md:flex justify-center items-center rounded-md  fixed bottom-8 right-6">
          <BsArrowUp size={26} className="text-white" />
        </button>
      </a>
      <a href="toTop">
        <button className=" h-10 md:15 w-10 md:15 bg-green-900 flex justify-center items-center rounded-md  fixed bottom-8 right-6 md:hidden">
          <BsArrowUp size={15} className="text-white" />
        </button>
      </a>
    </div>
  );
};

export default BacktoTop;
