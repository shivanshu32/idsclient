import React, { useState } from "react";
import { logo, passback , passbacksquare, logopop} from "../assets/index";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import Homemodel from "./Homemodel"

const onTopStyle = {
    position: 'absolute',
    width: '100%', 
    height: '100%', 
    top: '20%',
    left: '0',
    right: '0',
    bottom: '0',
    //backgroundColor: 'rgba(0,0,0,0.8)', /* Black background with opacity */
   // zIndex: '1', /* Specify a stack order in case you're using a different order for other elements */
    cursor: 'pointer' /* Add a pointer on hover */
  }

  const onTopStyle1 = {
    position: 'absolute',
   
    top: '10%',
    left: '0',
    right: '0',
    bottom: '0',
    //backgroundColor: 'rgba(0,0,0,0.8)', /* Black background with opacity */
   // zIndex: '1', /* Specify a stack order in case you're using a different order for other elements */
    cursor: 'pointer' /* Add a pointer on hover */
  }

export default function Index() {
  const [show, setshow_modal_XIII] = useState(true);

  // Swal.fire({
    
  //   width: 600,
  //   height:600,
  //   html: `
  //    <img
  //             src=${logopop}
             
             
  //    />

  //      <p className=" text-lg md:text-2xl lg:text-2xl text-secondary font-semibold">
  //              SEASON 5
  //             </p>
  //             <p className="text-white text-lg md:text-2xl lg:text-2xl pt-4">
  //             8th - 9th November 2024
  //             </p>
  //             <p className="text-white text-md md:text-md lg:text-md pt-4">
  //             Major Dhyanchand National Stadium, India Gate, Delhi
  //             </p>
  //             <Link to="/ids/season5">
  //             <button className="font-medium  w-[200px] border bg-white py-3 mt-4 hover:bg-gray-100 transform duration-300 ease-in-out">
  //             Grab Your Passess
  //             </button>
  //             </Link>
   
  // `,
  //   padding: "3em",
  //   color: "#ffffff",
  //   background: `#fff url(${passbacksquare})`,
  //   backdrop: `
  //     rgba(0,0,123,0.4)
  //     url("/images/nyan-cat.gif")
  //     left top
  //     object-contain
  //   `
  // });

  return (
    <>
      <div className="h-full md:hidden lg:hidden block" style={onTopStyle} >
        {/* <div 
          className={`${
            show ? "hidden" : "flex"
          } container mx-auto justify-center items-center px-4 md:px-10 py-20`} 
        >
          <button
            onClick={() => setshow_modal_XIII(true)}
            className="bg-white text-gray-800 py-5 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded"
          >
            Open Modal
          </button>
        </div> */}
        <div
          className={`${  show ? "flex" : "hidden" }  w-auto justify-center mx-auto bg-[#4C4C4C]    relative`}
        >
          <div className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px] flex justify-center items-center  cursor-pointer absolute right-10 top-8 z-10">
            <svg
              onClick={() => setshow_modal_XIII(false)}
              width={48}
              height={48}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                fill="#1F2937"
              />
            </svg>
          </div>
          <div className="relative  mx-auto">
            <img
              src={passbacksquare}
              alt
              className=" lg:block md:hidden hidden w-full  object-contain"
            />
            <img
              src={passbacksquare}
              alt
              className="lg:hidden md:block hidden w-full h-full object-contain"
            />
            <img
              src={passbacksquare}
              alt
              className=" lg:hidden md:hidden block w-full h-full object-contain"
            />
            <div className="absolute lg:bottom-20 lg:left-6 md:bottom-6 md:left-4 bottom-4 left-0 w-full px-4">
            
            <div className="flex flex-col items-center justify-between">
            <img
              src={logo}
              alt
              className="w-24 block lg:hidden md:hidden"
            />

            <img
              src={logo}
              alt
              className="w-32 lg:hidden md:block hidden"
            />

<img
              src={logo}
              alt
              className="w-48 lg:block md:hidden hidden"
            />
              
              <p className=" text-lg md:text-2xl text-secondary lg:text-2xl font-semibold">
               SEASON 5
              </p>
              <p className="text-white text-lg md:text-2xl lg:text-2xl pt-4">
              8th - 9th November 2024
              </p>
              <p className="text-white text-md md:text-md lg:text-md pt-4">
              Major Dhyanchand National Stadium, India Gate, Delhi
              </p>
              <Link to="/ids/season5">
              <button className="font-medium  w-[200px] border bg-white py-3 mt-4 hover:bg-gray-100 transform duration-300 ease-in-out">
              Grab Your Passess
              </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="hidden md:block lg:block" style={onTopStyle1} >
      <div className="">
        
        <div
          className={`${  show ? "flex" : "hidden" } lg:max-w-[500px] md:max-w-[744px] max-w-[375px] justify-center mx-auto bg-[#4C4C4C]   p relative`}
        >
          <div className="lg:w-[32px] lg:h-[32px] w-[24px] h-[24px] flex justify-center items-center  cursor-pointer absolute right-10 top-12 z-10">
            <svg
              onClick={() => setshow_modal_XIII(false)}
              width={48}
              height={48}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <div className="relative w-full mx-auto">
            <img
              src={passbacksquare}
              alt
              className=" lg:block md:hidden hidden object-fill w-full"
            />
            <img
              src={passback}
              alt
              className=" lg:hidden md:block hidden w-full"
            />
            <img
               src={passback}
              alt
              className=" lg:hidden md:hidden block w-full"
            />
             <div className="absolute lg:bottom-20 md:bottom-20 bottom-20  w-full px-4">
            
            <div className="flex flex-col items-center justify-between">
            <img
              src={logo}
              alt
              className="w-24 block lg:hidden md:hidden"
            />

            <img
              src={logo}
              alt
              className="w-32 lg:hidden md:block hidden"
            />

<img
              src={logo}
              alt
              className="w-48 lg:block md:hidden hidden"
            />
              
              <p className=" text-lg md:text-2xl lg:text-2xl text-secondary font-semibold">
               SEASON 5
              </p>
              <p className="text-white text-lg md:text-2xl lg:text-2xl pt-4">
              8th - 9th November 2024
              </p>
              <p className="text-white text-md md:text-md lg:text-md pt-4">
              Major Dhyanchand National Stadium, India Gate, Delhi
              </p>
              <Link to="/ids/season5">
              <button className="font-medium  w-[200px] border bg-white py-3 mt-4 hover:bg-gray-100 transform duration-300 ease-in-out">
              Grab Your Passess
              </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
       
      </div>

    </>
  );
}
