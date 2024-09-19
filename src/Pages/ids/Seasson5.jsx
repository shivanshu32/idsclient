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
      <p className="text-secondary text-center underline font-Lato text-[28px] font-semibold">IDS Seasson - 5 coming soon </p>
      <p className="text-white text-center pt-3 font-Lato "> Registration are open for designers and models</p>
      <p className="text-white text-center pt-3 font-Lato ">Our Ticket Price Start 599 INR</p>
      <span className = "flex   items-center justify-center gap-6 mt-12 ">
      <Link to = "/contact" className="flex justify-center">
            <span className="bg-secondary text-white px-6 py-2 rounded-md ">
          Join us
            </span>
          </Link>
          <span className="bg-secondary text-white px-6 py-2 rounded-md ">
          Pay Now
            </span>
          </span>
    </div>
    </>
  );
};

export default Seasson5;
