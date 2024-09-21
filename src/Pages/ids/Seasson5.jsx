import React from "react";
import { seFivedesk, sefivemo, sefivevidtab } from "../../assets";
import { Link } from "react-router-dom";
import VideoComponent from "../../components/Components";

const Seasson5 = () => {
  return (
    <>
        <span className="relative flex justify-center">
       
       <VideoComponent deskvid={seFivedesk} mobvid={sefivemo} tabvid={sefivevidtab} />
      
     </span>
    <div className="pt-20">
      <p className="text-secondary text-center underline font-Lato text-[28px] font-semibold">INDIA DESIGNER SHOW SEASON 5 </p>
      <p className="text-white text-xl text-center pt-3 font-Lato "> <b>Date</b> 8th-9th November 2024</p>
      <p className="text-white text-xl text-center pt-3 font-Lato "><b>Venue</b> Major Dhyanchand Stadium India Gate </p>
      {/* <span className = "flex   items-center justify-center gap-6 mt-12 ">
      <Link to = "/contact" className="flex justify-center">
            <span className="bg-secondary text-white px-6 py-2 rounded-md ">
          Join us
            </span>
          </Link>
          <span className="bg-secondary text-white px-6 py-2 rounded-md ">
          Pay Now
            </span>
          </span> */}
    </div>

    {/* test starts */}
    <div>
            <div className="2xl:mx-auto 2xl:container md:px-20 px-4 md:py-12 py-9">
                <div className="relative rounded-md">
                    {/* <img src="/4.png" alt="city view" className="w-full h-full rounded-md  object-center object-fill absolute sm:block hidden" /> */}
                    {/* <img src="/4.png" alt="city view" className="w-full h-full rounded-md absolute object-center object-fill sm:hidden" /> */}
                    <div className="text-xl relative z-20 bg-gradient-to-r from-black-700 to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
                        <div>
                            <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">Grab your Passes</h1>
                            <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">Your contributions towards IDS</p>
                            <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">3:00pm to 3:30pm</p>
                        </div>
                        <div className="md:mt-12 mt-20">
                            <button className="text-base font-medium leading-4 text-indigo-700 bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white">BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* test ends */}
    </>
  );
};

export default Seasson5;
