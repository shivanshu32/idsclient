import React from "react";
import {logo, Sonakshipic, Sehnaaz, tripti, tamanna} from "../../../assets/index"
import { Link } from "react-router-dom"

const onTopStyle = {
    position: 'fixed',
    width: '100%', 
    height: '100%', 
    top: '30%',
    backgroundColor: 'rgba(0,0,0,0.8)', /* Black background with opacity */
    zIndex: '200', /* Specify a stack order in case you're using a different order for other elements */
    cursor: 'pointer' /* Add a pointer on hover */
  }

const Banner9 = () => {
    return (
        <div className=" sm:mx-auto w-full " >
            <div className="flex w-full items-center justify-between bg-black md:flex-row flex-col  space-y-6 md:space-y-0 w-full">
                <div className="hidden md:block">
               
                    <img src={tamanna} className="w-96" />
                    {/* <img className="hidden xl:block w-full" src="https://i.ibb.co/ZcSmVGf/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                    <img className="xl:hidden w-full" src="https://i.ibb.co/mBk8myg/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1" /> */}
                </div>
                <div className="flex justify-center items-center flex-col xl:w-2/5 md:px-6 sm:w-3/4 md:w-2/4">

                
                <img src={logo} className="object-contain w-48 h-auto"/>
                    <div className="">
                        
                        <h1 className="xl:text-4xl text-3xl font-semibold leading-9 text-secondary">SEASON 5</h1>
                    </div>
                    {/* <div className="mt-4">
                        <p className="xl:text-xl text-base leading-7 text-center text-gray-600">Register now and exprience hassle free experice at IDS 5</p>
                    </div> */}
{/* date starts */}
                    <div className="flex justify-center items-center mt-8 ">
                                {/* <div className="flex items-center pr-2">
                                    <div className="w-5 h-5 bg-red-600 rounded-full z-10" />
                                    <div className="w-5 h-5 bg-yellow-500 -ml-2 z-0 rounded-full" />
                                </div> */}
                                 <span className="mr-1  text-red-500 dark:text-gray-400">
                            <svg className="icon icon-tabler icon-tabler-map-pin"
                     width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V19.5C2.25 20.7426 3.25736 21.75 4.5 21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V6C21.75 4.75736 20.7426 3.75 19.5 3.75Z"
                        stroke="currentColor"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.875 12C14.4963 12 15 11.4963 15 10.875C15 10.2537 14.4963 9.75 13.875 9.75C13.2537 9.75 12.75 10.2537 12.75 10.875C12.75 11.4963 13.2537 12 13.875 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M17.625 12C18.2463 12 18.75 11.4963 18.75 10.875C18.75 10.2537 18.2463 9.75 17.625 9.75C17.0037 9.75 16.5 10.2537 16.5 10.875C16.5 11.4963 17.0037 12 17.625 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M13.875 15.75C14.4963 15.75 15 15.2463 15 14.625C15 14.0037 14.4963 13.5 13.875 13.5C13.2537 13.5 12.75 14.0037 12.75 14.625C12.75 15.2463 13.2537 15.75 13.875 15.75Z"
                        fill="currentColor"
                      />
                      <path
                        d="M17.625 15.75C18.2463 15.75 18.75 15.2463 18.75 14.625C18.75 14.0037 18.2463 13.5 17.625 13.5C17.0037 13.5 16.5 14.0037 16.5 14.625C16.5 15.2463 17.0037 15.75 17.625 15.75Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6.375 15.75C6.99632 15.75 7.5 15.2463 7.5 14.625C7.5 14.0037 6.99632 13.5 6.375 13.5C5.75368 13.5 5.25 14.0037 5.25 14.625C5.25 15.2463 5.75368 15.75 6.375 15.75Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.125 15.75C10.7463 15.75 11.25 15.2463 11.25 14.625C11.25 14.0037 10.7463 13.5 10.125 13.5C9.50368 13.5 9 14.0037 9 14.625C9 15.2463 9.50368 15.75 10.125 15.75Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6.375 19.5C6.99632 19.5 7.5 18.9963 7.5 18.375C7.5 17.7537 6.99632 17.25 6.375 17.25C5.75368 17.25 5.25 17.7537 5.25 18.375C5.25 18.9963 5.75368 19.5 6.375 19.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.125 19.5C10.7463 19.5 11.25 18.9963 11.25 18.375C11.25 17.7537 10.7463 17.25 10.125 17.25C9.50368 17.25 9 17.7537 9 18.375C9 18.9963 9.50368 19.5 10.125 19.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M13.875 19.5C14.4963 19.5 15 18.9963 15 18.375C15 17.7537 14.4963 17.25 13.875 17.25C13.2537 17.25 12.75 17.7537 12.75 18.375C12.75 18.9963 13.2537 19.5 13.875 19.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6 2.25V3.75"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 2.25V3.75"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.75 7.5H2.25"
                        stroke="currentColor"
                        strokeLinejoin="round"
                      />
                    </svg>
                                    </span>
                                <p className="text-2xl font-semibold leading-3 text-white ">
                                   
                              November 8th-9th 2024
                                </p>  
                            </div>
                            {/* date ends */}


                             {/* locations starts */}
                 <div className="flex justify-center items-center">
                            <span className="mr-1 mt-4 text-red-500 dark:text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={11} r={3} />
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                                        </svg>
                                    </span>
                            <p className="text-xl  font-medium leading-3 text-white mt-6">Major Dhyan Chand Stadium, India Gate, New Delhi</p>
    </div> 
                {/* location ends */}

                    <div className="mt-8 flex justify-center items-center w-full">
                        <button className="hover:opacity-75 flex justify-center bg-secondary sm:w-1/2 w-full h-10 py-3">
                        <Link to="/ids/season5">
                            <p className="text-base font-medium leading-none text-white mb-8">Grab Your Passes</p>
                        </Link>
                        </button>
                    </div>
                  
                </div>
                <div className="flex md:w-auto w-full justify-center flex-row space-x-4 md:space-x-0">
                    <div className="w-full">
                    <img src={tripti} className="w-96" />
                    </div>
                    {/* <div className="md:hidden w-full">
                        <img className="hidden xl:block w-full" src="https://i.ibb.co/ZcSmVGf/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                        <img className="xl:hidden w-full" src="https://i.ibb.co/mBk8myg/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner9;
