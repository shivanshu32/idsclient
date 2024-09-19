import React, { useState } from "react";

import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import { contact } from "../assets/home";

const Contact = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <>
      <span>
        <img
          src={contact}
          alt="img"
          className="w-full md:h-screen  brightness object-cover"
          loading="lazy"
        />
      </span>

      <div className="flex md:justify-center md:items-center  md:w-full sm:w-full mt-9   px-6 pb-9    ">
        <div className="flex sm:w-full w-full md:flex-row sm:flex-row flex-col md:justify-center sm:justify-center justify-center md:gap-20 sm:gap-9 gap-6 sm:mx-36">
        <div
            className={`glass text-white px-3 py-2 tab-shadow cursor-pointer text-center ${
              toggle === 3
                ? "bg-secondary text-black"
                : "hover:bg-secondary hover:text-black"
            }`}
            onClick={() => toggleTab(3)}
          >
            Apply For Brands
          </div>
          <div
            className={`glass text-white px-3 py-2  tab-shadow cursor-pointer text-center ${
              toggle === 1
                ? "bg-secondary text-black"
                : "hover:bg-secondary hover:text-black"
            }`}
            onClick={() => toggleTab(1)}
          >
            Apply For Designers
          </div>
      
       
          <div
            className={`glass text-white   px-3 py-2 tab-shadow cursor-pointer text-center ${
              toggle === 2
                ? "bg-secondary text-black"
                : "hover:bg-secondary hover:text-black"
            }`}
            onClick={() => toggleTab(2)}
          >
            Apply For Models
          </div>
        </div>
      </div>
      <div
        className={toggle === 1 ? "block text-white md:px-40 px-6" : "hidden"}
      >
        <div className="w-full  rounded-tl-[2rem] rounded-bl-[2rem] overflow-x-hidden glass border border-secondary mt-9">
          <Form1 />
        </div>
      </div>

      <div
        className={toggle === 2 ? "block text-white md:px-40 px-6" : "hidden"}
      >
        <div className="w-full rounded-tl-[2rem] rounded-bl-[2rem] overflow-x-hidden glass border border-secondary mt-9">
          <Form2 />
        </div>
      </div>

      <div
        className={toggle === 3 ? "block text-white md:px-40 px-6" : "hidden"}
      >
        <div className="w-full rounded-tl-[2rem] rounded-bl-[2rem] overflow-x-hidden glass border border-secondary mt-9">
          <div className="flex md:flex-row flex-col sm:flex-row justify-around mt-8 overflow-hidden">
            <Form3 />
          </div>
        </div>
      </div>
      <p className="text-[23px] font-Lato text-white text-center mt-9 ">
        Contact Us
      </p>
      <span className="font-Lato text-white flex md:flex-row flex-col  sm:flex-row md:justify-center sm:justify-center    items-center md:gap-24 sm:gap-9  ">
        <span>
          <p className="text-[17px] mt-9 ">Designer Enquiry</p>
          <p className=" font-thin text-[12px] tracking-wide">
            pr@indiadesignershow.com
          </p>

          <p className="text-[17px] mt-6 ">Buyer Enquiry </p>
          <p className=" font-thin text-[12px] tracking-wide">
            info@indiadesignershow.com
          </p>
        </span>
        <span>
          <p className="text-[17px] mt-9 ">Sponsorship Enquiry</p>
          <p className=" font-thin text-[12px] tracking-wide">
            info@indiadesignershow.com
          </p>

          <p className="text-[17px] mt-6 ">Media Enquiry</p>
          <p className=" font-thin text-[12px] tracking-wide">
            pr@indiadesignershow.com
          </p>
        </span>
      </span>
    </>
  );
};

export default Contact;
