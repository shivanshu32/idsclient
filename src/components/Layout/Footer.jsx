import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaGooglePlusG, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <span className="w-full bg-black font-DMsans ">
        <hr className="border border-white mt-9 " />
        <span className="flex items-center md:justify-between sm:justify-between justify-center px-12 py-5">
          <span className="text-white  font-extralight text-[12px] md:block sm:block hidden">
            @ Copyright Indian Designer Show
          </span>
          <span className="flex   gap-6">
          <Link to = "/terms" className="text-white hover:text-secondary font-extralight text-[12px] md:block sm:block hidden">
            Terms and Conditions
          </Link>|
          <Link to="/privacy-policy" className="text-white hover:text-secondary   font-extralight text-[12px] md:block sm:block hidden">
             Privacy Policy
          </Link>|
           <Link to="/refund-policy" className="text-white hover:text-secondary  font-extralight text-[12px] md:block sm:block hidden">
            Refund Policy
          </Link>
          </span>
          <span className="text-white flex gap-3">
          <Link to = "https://www.facebook.com/IDS2K21/">
          <span className="bg-[#2b2a2a] rounded-full w-[35px] h-[35px] inline-flex justify-center items-center cursor-pointer hover:bg-secondary">
            <FaFacebook size={20} />
          </span>
          </Link>
          <Link to = "https://www.instagram.com/indiadesignershow/">
          <span className="bg-[#1f1f1f] rounded-full w-[35px] h-[35px] inline-flex justify-center items-center  cursor-pointer hover:bg-secondary">
            {" "}
           
            <FaInstagram size={22} />
         
          </span>
          </Link>
          <Link to = "https://x.com/indiadesignshow?lang=en">
          <span className="bg-[#2b2a2a] rounded-full w-[35px] h-[35px] inline-flex justify-center items-center cursor-pointer hover:bg-secondary">
            {" "}
            <FaXTwitter size={20} />
          </span>
          </Link>
          <Link to = "https://www.youtube.com/c/IndiaDesignerShow">
          <span className="bg-[#2b2a2a] rounded-full w-[35px] h-[35px] inline-flex justify-center items-center cursor-pointer hover:bg-secondary">
            <FaYoutube size={20} />
          </span>
          </Link>
          <Link to = "https://www.linkedin.com/company/indiadesignershow/?originalSubdomain=in">
          <span className="bg-[#2b2a2a] rounded-full w-[35px] h-[35px] inline-flex justify-center items-center cursor-pointer hover:bg-secondary">
            <AiFillLinkedin size={20} />
          </span>
          </Link>
          <Link to = "https://www.indiadesignershow.com">
          <span className="bg-[#2b2a2a] rounded-full w-[35px] h-[35px] inline-flex justify-center items-center cursor-pointer hover:bg-secondary">
            <FaGooglePlusG  size={20} />
          </span>
          </Link>
          </span>
          {/* <span className="text-white  font-extralight text-[12px] md:block sm:block hidden">Privacy Policy | Terms &  Conditions</span> */}
        </span>
      </span>
      
      <span className="text-white  font-extralight text-[12px] block md:hidden sm:hidden pb-3 text-center">
            @2024 Copyright India Designer Show
          </span>
          
    </>
  );
};

export default Footer;
