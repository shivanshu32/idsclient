import React, { useEffect } from "react";
import directort from "../../assets/directort.webp";
import { designer } from "../../assets/home";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { lokesh } from "../../assets";
gsap.registerPlugin(ScrollTrigger);

const ShowDirectors = () => {
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
        {/* <span className='absolute  z-20 hidden md:block'>
        <h1 className='font-semibold md:text-[80px] text-[55px] md:mt-72 mt-72 text-center banner-text'>Show Directors</h1>
          
        </span> */}
      </span>
      <span>
        <img
          src={designer}
          alt="img"
          loading="lazy"
          className="w-full md:h-screen sm:h-screen brightness"
        />
      </span>

      <span className="flex flex-wrap  justify-center items-center md:px-14 px-6 gap-5 mt-16 mb-20">
        <div className="relative">
          <img
            src={lokesh}
            alt="img"
            loading="lazy"
            className="w-[22rem]  h-[25rem] popimg border-2 border-secondary rounded-xl  mt-3"
          />
          <div className=" py-9 mt-3 absolute inset-0 cardHover opacity-0 hover:opacity-90 transition-opacity duration-700 rounded-lg">
            <p className="text-3xl text-center text-[#F97A00] p-6 font-poppins">
              Lokesh Sharma
            </p>
            <p className="text-white font-poppins text-center text-[12px] px-3">
              Lokesh Sharma is A Fashion Choreographer, Show Director, Grooming
              Expert and has Been Directing And Choreographing Shows Like India
              Fashion Week London, Mercedes-Benz Fashion Week Doha, India
              Fashion Week Dubai, India Intimate Fashion Week, Asian Designer
              Week India, And Many More. Along With Choreographing Indian
              National Pageants, He Has Also Done Solo Shows With India, Qatar,
              Dubai, Pakistan, And London-Based Designers.
            </p>
            <div>
              <Link to="https://www.instagram.com/lokeshsharmaofficial/">
                {" "}
                <FaInstagram className="text-[#f1f1f1] ss:text-7xl text-7xl mx-auto  p-4 cursor-pointer" />
              </Link>
            </div>{" "}
          </div>
        </div>
        <div className="relative">
          <img
            src={directort}
            alt="img"
            loading="lazy"
            className="w-[22rem]  h-[25rem] popimg border-2 border-secondary rounded-xl  mt-3"
          />
          <div className=" py-9 mt-3 absolute inset-0 cardHover opacity-0 hover:opacity-90 transition-opacity duration-700 rounded-lg">
            <p className="text-3xl text-center text-[#F97A00] p-6 font-poppins">
              Vahbiz Mehta
            </p>
            <p className="text-white font-poppins text-center text-[12px] px-3">
              Vahbiz has been an integral part of the fashion industry. Show
              direction explores many dimensions of creativity. She has directed
              shows for leading designers such as Neeta Lulla, Rocky S, Wendell
              Rodericks, Vikram Phadnis, Satya Paul, Arjun Khanna, Nachiket
              Barve, Arjun Saluja, as well as top brands such as The Woolmark
              Company, Tommy Hilfiger, Koovs, Hackett, Vero Moda and more. The
              USP of her Lakmé Fashion Week shows is the experiential and
              conceptual presentations which have transformed the conventional
              runway to out of the box presentations. The fashion platform has
              been reinvented in unique ways each time.
            </p>
            <div>
              <Link to="https://www.instagram.com/vahbizmehta/?hl=en">
                {" "}
                <FaInstagram className="text-[#f1f1f1] ss:text-7xl text-7xl mx-auto  p-4 cursor-pointer" />
              </Link>
            </div>{" "}
          </div>
        </div>
      </span>
    </>
  );
};

export default ShowDirectors;
