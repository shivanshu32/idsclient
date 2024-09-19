import React, { useEffect } from "react";
import { designer } from "../../assets/home";
import { dbData, designerData } from "../Data.js/Img";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import "../gal.css";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);
const Designers = () => {
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
      <div className="h-screen">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className=" w-full h-full bg-black"
        >
          {dbData?.map((des, index) => (
            <SwiperSlide key={index}>
              <img
                src={des.designerImg}
                alt="coverimg "
                className=" w-full h-screen bg-black cursor-pointer object-cover"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
        {designerData.map((i) => (
          <div className="relative">
            <img
              loading="lazy"
              src={i.srcdata}
              className="w-[22rem]  h-[25rem] popimg  border-2 border-secondary rounded-xl  mt-3 hover:bg-secondary "
            />
            <div className=" py-9 mt-24 absolute inset-0 cardHover opacity-0 hover:opacity-90 transition-opacity duration-700 rounded-lg">
              <p className="text-3xl text-center text-[#F97A00] p-6 font-poppins">
                {i.text}
              </p>
              <p className="text-white font-poppins text-center text-sm">
                Instagram account
              </p>
              <div>
                <Link to={i.instalink}>
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

export default Designers;
