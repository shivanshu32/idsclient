import React from "react";
import { check, curve, logo } from "../assets/index";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <>
      <span>
        <Link to="/">
          {" "}
          <img
            src={logo}
            loading="lazy"
            alt="logo"
            className="md:w-[8%] sm:w-[14%] w-20 md:mx-12 mx-6 mt-3 cursor-pointer"
          />
        </Link>
      </span>

      <div className="bg-[#181818]  md:mx-80 mx-6 mt-9 md:mt-0 my-2 rounded-xl shadow  flex flex-col justify-center items-center font-DMsans my-">
        <img
          loading="lazy"
          src={curve}
          alt="img"
          className="sm:w-full xl:w-full"
        />
        <img
          loading="lazy"
          src={check}
          alt="img"
          className="w-[14%] xl:w-28 sm:w-[14%] md:w-[14%] mt-12"
        />
        <p className="text-center md:px-36 mx-3 pt-5 sm:px-20 text-white">
          Thank You for registering <br /> we will connect with you soon...
        </p>
        <Link
          to="/"
          className="bg-secondary text-white font-medium px-6 py-2 rounded-lg mt-10 mb-9"
        >
          Back to Homepage
        </Link>
      </div>
    </>
  );
};

export default Thankyou;
