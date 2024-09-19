import React, { useEffect } from "react";
import gsap from "gsap";
import { about } from "../assets/home";

const About = () => {
  useEffect(() => {
    gsap.from(".popimg", {
      opacity: 0,
      delay: 0.2,
      scale: -0.1,
      ease: "none",
    });
  }, []);
  return (
    <>
      <span className="relative">
        <div className=" ">
          <img
            loading="lazy"
            src={about}
            alt="img"
            className="md:w-full md:h-screen sm:h-screen h-full brightness-90 "
          />

          {/* <span className='  text-center  z-20 px-20 sm:px-0'>
    
        <h1 className='font-semibold md:text-[80px] text-[55px] sm:text-[95px] md:pt-52 sm:pt-[25rem] pt-80 banner-text'>About Us</h1>
  
      </span> */}
        </div>
        <span className="text-white text-center">
          <h1 className="font-medium text-[39px] popimg  mt-16 text-secondary underline ">
            About Us
          </h1>
          <p className="text-[15px] text-center popimg  md:px-56 px-9 pt-5 ptimefont  font-extralight pb-20">
            India Designer Show stands as one of the world's most prestigious
            luxury fashion events, epitomizing glitz, glamour, and sparkle.
            Renowned for attracting famous celebrities, this event primarily
            aims to create a global platform for Indian designers to showcase
            their talent. By promoting Swadeshi goods, the show fosters a
            competitive and positive environment, offering a lucrative market
            for participants.
            <br />
            <br />
            The event is a unique convergence of diverse design disciplines,
            inviting Indian designers from various fields to exhibit their work.
            These include: Architecture: Innovators in structural design can
            present their architectural masterpieces. Interior Designing:
            Professionals in interior design will display their cutting-edge
            decor concepts. Jewellery Design: Jewellers will have the
            opportunity to unveil their exquisite collections. Infrastructure
            Designing: Designers focusing on infrastructure can showcase their
            visionary projects. Automobile Design: Automobile designers will
            reveal their latest car designs, promoting both brands and
            individual talent. Tattoo Design: Tattoo designers will demonstrate
            their artistry using models as canvases. Fashion Design: Fashion
            designers will exhibit their latest collections on the ramp,
            featuring supermodels. Aspiring to be India’s premier fashion event,
            the India Designer Show aims to offer a robust national platform
            where designers can effortlessly connect with media and buyers. The
            event not only highlights sophisticated glamour but also emphasizes
            the rich cultural heritage that defines Indian fashion.
          </p>
        </span>
      </span>

      {/* <span className="flex justify-center items-center gap-7 mt-20">
        <div className="bg-secondary w-[53vh] h-[50vh] rounded-2xl ">
          <img src={dummy} alt="img" className="w-[52vh] h-[50vh] ml-3 mt-3" />
        </div>
        <span className="border border-secondary text-white w-[60vh] rounded-xl h-[60vh] ">

          <p className="text-[28px] font-medium pt-28 px-3">Ronnit Aggarwal<p className="text-[15px] pb-3">(Founder)</p></p>
          <p className="text-[13px] font-extralight px-3">
            Welcome to [Agency Name], where innovation meets creativity, and
            every project is a canvas for extraordinary possibilities. With a
            passion for pushing boundaries and redefining aesthetics, we bring
            your brand to life through captivating design and strategic vision.
            Our team, a fusion of diverse talents, is dedicated to transforming
            ideas into impactful visual stories.
          </p>
         
        </span>
      </span>

       <span className="flex justify-center items-center gap-7 mt-12">
       
        <span className="border border-secondary text-white w-[60vh] rounded-xl h-[60vh] ">

          <p className="text-[28px] font-medium pt-28 px-3">Bibin Babu  <p className="text-[15px] pb-3">(Co-Founder)</p></p>
          <p className="text-[13px] font-extralight px-3">
            Welcome to [Agency Name], where innovation meets creativity, and
            every project is a canvas for extraordinary possibilities. With a
            passion for pushing boundaries and redefining aesthetics, we bring
            your brand to life through captivating design and strategic vision.
            Our team, a fusion of diverse talents, is dedicated to transforming
            ideas into impactful visual stories.
          </p>
         
        </span>
         <div className="bg-secondary w-[53vh] h-[50vh] rounded-2xl ">
          <img src={dummy} alt="img" className="w-[52vh] h-[50vh] ml-3 mt-3" />
        </div>
      </span>


      <h1 className='font-medium text-[39px] text-white text-center mt-16'>Team Members</h1>


        <h1 className='font-medium text-[39px] text-white text-center mt-16'> Board of Directors</h1> */}
    </>
  );
};

export default About;
