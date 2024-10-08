import React, { useEffect, useState, useRef } from "react";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homedeskfour, homem, hometab, logo, lokesh, seFourdesk } from "../assets/index";
import Crousel from "../components/Layout/Crousel";
import { instaData, ytSrc } from "./Data.js/Img";
import apiurl from "../util";
import Ids5cta from "./ids/components/ids5cta"
import Homemodel from "../components/Homemodel"
import Homemodelnew from "../components/Homemodelnew"

import { Link } from "react-router-dom";
import VideoComponent from "./../components/Components";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [image, setImage] = useState();

  const getImages = async () => {
    try {
      const response = await apiurl.get(`/getBrand`);
      setImage(response.data);
      console.log(response.data, "klk");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

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
          <div className=' absolute md:px-9 px-3 z-20'>
<Link to = '/'><img src={logo} alt="logo" className='w-28 m-6 cursor-pointer '/></Link>
      </div>
      <div className="overflow-hidden">
        <span>
          <VideoComponent deskvid={homedeskfour} mobvid={homem} tabvid={hometab} />
         
        </span>
        <div className="w-full">

        {/* <Ids5cta />  */}
        </div>
        <span>
          <span className="text-white md:text-center sm:text-center text-start ">
            <h1 className="font-semibold text-secondary underline primefont text-[30px] text-center mt-16 mb-9">
              About Us
            </h1>

            <p className="text-[15px]  xl:text-[22px] text-center parallax pt-20 pb-20 font-thin primefont md:px-20 px-9 ">
              India Designer Show stands as one of the world's most prestigious
              luxury fashion events, epitomizing glitz, glamour, and sparkle.
              Renowned for attracting famous celebrities, this event primarily
              aims to create a global platform for Indian designers to showcase
              their talent. By promoting Swadeshi goods, the show fosters a
              competitive and positive environment, offering a lucrative market
              for participants. The event is a unique convergence of diverse
              design disciplines, inviting Indian designers from various fields
              to exhibit their work. These include: Architecture: Innovators in
              structural design can present their architectural masterpieces.
              Interior Designing: Professionals in interior design will display
              their cutting-edge decor concepts. Jewellery Design: Jewellers
              will have the opportunity to unveil their exquisite collections.
              Infrastructure Designing: Designers focusing on infrastructure can
              showcase their visionary projects. Canvas Art: Canvas artists will
              present their paintings, adding a fine arts dimension to the
              event. Automobile Design: Automobile designers will reveal their
              latest car designs, promoting both brands and individual talent.
              Tattoo Design: Tattoo designers will demonstrate their artistry
              using models as canvases. Fashion Design: Fashion designers will
              exhibit their latest collections on the ramp, featuring
              supermodels. Aspiring to be India’s premier fashion event, the
              India Designer Show aims to offer a robust national platform where
              designers can effortlessly connect with media and buyers. The
              event not only highlights sophisticated glamour but also
              emphasizes the rich cultural heritage that defines Indian fashion.
            </p>
          </span>
          <h1 className="font-semibold primefont text-[30px] text-secondary underline text-center mt-16">
            Highlighted Images
          </h1>
          <span className="w-full px-6">
            <Crousel />
          </span>

          <h1 className="font-semibold primefont text-[30px] text-secondary underline text-center mt-16">
            Highlighted Videos
          </h1>
          <span className="grid md:grid-cols-4 sm:grid-cols-3 gap-6 grid-cols-1 md:px-16 px-6 mt-9 ">
            {ytSrc.map((viditem) => (
              <iframe
                className="w-full h-full sm:h-36  border-2 border-secondary rounded-xl"
                src={viditem.vidsrc}
                key={viditem.id}
                title="India Designer Show"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            ))}
          </span>

          <Link to="https://www.youtube.com/c/IndiaDesignerShow" className="flex justify-center mt-12">
            <span className="bg-secondary text-white px-6 py-2 rounded-md ">
              See More...
            </span>
          </Link>
          {/* <h1 className="font-semibold text-[30px] primefont text-secondary underline text-center mt-16">
            {" "}
            Instagram Feeds
          </h1> */}
          {/* <iframe src='https://widgets.sociablekit.com/instagram-feed/iframe/25448018' frameborder='0' width='100%' height='1000'></iframe> */}
       {/* <iframe src="//lightwidget.com/widgets/34a70d300d1155c28ef3cc7d974bb79e.html"  allowtransparency="true" class="lightwidget-widget" width='100%' height='1000' className="scrollbar-hide overflow-hidden mt-8 md:mx-6 mx-3 sm:mx-6" ></iframe> */}
          {/* <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center mt-9 gap-7 md:mx-12 mx-4 ">
            {instaData.map((data) => (
              <Link to={data.linkProfile} className="cursor-pointer">
                <div
                  className="bg-white  flex flex-col  md:w-96  rounded-md h-full"
                  key={data.id}
                >
                  <div className="flex flex-row  items-center justify-between px-3 py-3">
                    <span className="flex flex-row items-center gap-3">
                      <img
                        src={social}
                        alt="logo"
                        loading="lazy"
                        className="rounded-full w-9 h-9"
                      />
                      <span className="flex flex-col">
                        <p className="font-semibold md:text-[15px] sm:text-[15px] text-[13px]">
                          indiadesignershow{" "}
                        </p>
                        <p className="font-thin text-[13px]">Delhi</p>
                      </span>
                    </span>
                    <Link to={data.linkProfile}>
                      <span className="bg-blue-500 text-white text-[14px] rounded-md md:px-4 sm:px-4 px-2 py-1 cursor-pointer">
                        View Profile
                      </span>
                    </Link>
                  </div>
                  <img
                    src={data.imgUrl}
                    alt=""
                    loading="lazy"
                    className=" w-full h-full px-1 py-1"
                  />
                </div>
              </Link>
            ))}
          </div> */}
          {/* <Link to = "https://www.instagram.com/indiadesignershow/?hl=en" className="flex justify-center mt-12">
            <span className="bg-secondary text-white px-6 py-2 rounded-md ">
              See More...
            </span>
          </Link> */}
          {/* <h1 className="font-semibold text-[30px] text-secondary underline text-center mt-16">
            {" "}
            Associate Brand Partners
          </h1>

          <Marquee
            autoFill={true}
            pauseOnHover
            speed={100}
            loop={0}
            gradientWidth={500}
            className="w-full    mb-[4rem] mt-[2rem]  px-16"
          >
            <div className="flex justify-around items-center  gap-[3rem]">
              {image?.map((data, index) => (
                <span className="">
                  <img
                  key={data.image}
                    src={data.imageUrl}
                    alt="img"
                    loading="lazy"
                    className="w-16 h-16 rounded-xl ml-6 bg-white"
                  />
                </span>
              ))}
            </div>
          </Marquee>*/}
        </span> 
      
      </div>

    {/* <Homemodel /> */}

    <Homemodelnew />
    
    </>
  );
};

export default Home;
