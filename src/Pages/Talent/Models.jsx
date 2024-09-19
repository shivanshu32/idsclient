import React, { useEffect } from "react";
import { designer } from "../../assets/home";
import { modelImg } from "../Data.js/Img";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { bannerm } from "../../assets/smodel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Models = () => {
  useEffect(() => {
    gsap.from(".popimg", {
      opacity: 0,
      scale: 0.5,
      ease: "back",
      duration: 0.5,
      stagger: 0.8,
    });
  }, []);

  return (
    <>
      <span className="relative flex justify-center">
        {/* <span className='absolute  z-20'>
        <h1 className='font-semibold md:text-[80px] text-[55px] md:mt-72 mt-72 text-center banner-text'>Models</h1>
      </span> */}
      </span>
      <span>
        <img
          src={bannerm}
          loading="lazy"
          alt="img"
          className="w-full  md:h-screen sm:h-screen brightness-90 object-cover "
        />
      </span>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center md:px-14 px-6 gap-5">
        {modelImg.map((i) => (
          <div className="relative">
            <img
              src={i.modsrc}
              loading="lazy"
              className="w-full  h-[27rem] popig object-cover  border-2 border-secondary rounded-xl  mt-16 "
            />
            <div className=" py-9 mt-32 absolute inset-0 cardHover opacity-0 hover:opacity-90 transition-opacity duration-700 rounded-lg">
              <p className="text-3xl text-center text-[#F97A00] p-6 font-poppins">
                {i.text}
              </p>
              <p className="text-white font-poppins text-center text-sm">
                Instagram account
              </p>
              <div>
                <Link to={i.instaurl}>
                  {" "}
                  <FaInstagram className="text-[#f1f1f1] ss:text-9xl text-8xl mx-auto  p-4 cursor-pointer" />
                </Link>
              </div>{" "}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Models;
