import React from "react";
import { error } from "../assets/index";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <>
        <div className="text-center font-poppins h-[100vh]">
          <div className="flex justify-center items-center md:pt-36 sm:pt-80 pt-28 ">
            <img
              src={error}
              alt="img"
              className="w-[40vh]   md:w-[70vh]"
              loading="lazy"
            />
          </div>
          <span className="text-white">
            <p className="md:text-[36px] text-[28px] font-semibold">
              Oops! We couldn't find that page.
            </p>
            <p className="md:text-[25px]">
              May be you find what you need here...
            </p>
          </span>
          <Link to="/">
            <button className="bg-secondary text-white mt-9 px-[6vh] py-2 rounded-lg hover:bg-transparent hover:border hover:border-secondary hover:text-secondary ">
              Back to home page
            </button>
          </Link>
        </div>
      </>
    </>
  );
};

export default ErrorPage;
