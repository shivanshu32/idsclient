import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./gal.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { galleryBanner } from "./Data.js/Img.js";
import apiurl from "../util.jsx";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { 
  s1one,
s1two,
s1three,
s1four,
s1five,
s1six,
s1seven,
s1eight,
s1nine,
s1ten,
s1eleven,
s1twelve ,
s1thirteen ,
s1fourteen ,
s1fifteen ,
s1sixteen ,
s1seventeen ,
s1eighteen ,
s1nineteen ,
s1twenty ,
s1twentyone ,
s1twentytwo ,
s1twentythree ,
s1twentyfour,
s1twentyfive,
s2one,
s2two,
s2three,
s2four,
s2five,
s2six,
s2seven,
s2eight,
s2nine,
s2ten,
s2eleven,
s2twelve ,
s2thirteen ,
s2fourteen ,
s2fifteen ,
s2sixteen ,
s2seventeen ,
s2eighteen ,
s2nineteen ,
s2twenty ,
s2twentyone ,
s2twentytwo ,
s2twentythree ,
s2twentyfour,
s2twentyfive,
s3one,
s3two,
s3three,
s3four,
s3five,
s3six,
s3seven,
s3eight,
s3nine,
s3ten,
s3eleven,
s3twelve ,
s3thirteen ,
s3fourteen ,
s3fifteen ,
s3sixteen ,
s3seventeen ,
s3eighteen ,
s3nineteen ,
s3twenty ,
s3twentyone ,
s3twentytwo ,
s3twentythree ,
s3twentyfour,
s3twentyfive,
s4one,
s4two,
s4three,
s4four,
s4five,
s4six,
s4seven,
s4eight,
s4nine,
s4ten,
s4eleven,
s4twelve ,
s4thirteen ,
s4fourteen ,
s4fifteen ,
s4sixteen ,
s4seventeen ,
s4eighteen ,
s4nineteen ,
s4twenty ,
s4twentyone ,
s4twentytwo ,
s4twentythree ,
s4twentyfour,
s4twentyfive,
s4twentysix,
s4twentyseven,
 } from "../assets/IDS"

const Gallery = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [image, setImage] = useState();
  const [media, setMedia] = useState();
  // const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  // const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
  const [visibleImageCount, setVisibleImageCount] = useState(9); // Number of images initially visible
  const [loadMoreButtonVisible, setLoadMoreButtonVisible] = useState(true);
  const getImages = async () => {
    try {
      const response = await apiurl.get(`/getGallary`);
      setImage(response.data);
      if (response.data.length <= visibleImageCount) {
        setLoadMoreButtonVisible(false); // Hide "See More" button if all images are visible initially
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loadMoreImages = () => {
    setVisibleImageCount(visibleImageCount + 9); // Increase visible image count by 9
    if (visibleImageCount >= image.length) {
      setLoadMoreButtonVisible(false); // Hide "See More" button if all images are loaded
    }
  };

  const getMedia = async () => {
    try {
      const response = await apiurl.get(`/getGenXOrPaidMedia?value=${"media"}`);
      setMedia(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getImages();
    getMedia();
  }, []);

  // const openImageModal = (index) => {
  //   setSelectedImageIndex(index);
  // };

  // const closeImageModal = () => {
  //   setSelectedImageIndex(null);
  // };

  // const openMediaModal = (index) => {
  //   setSelectedMediaIndex(index);
  // };

  // // Function to close media modal
  // const closeMediaModal = () => {
  //   setSelectedMediaIndex(null);
  // };

  // // Function to navigate to previous media
  // const prevMedia = () => {
  //   setSelectedMediaIndex(
  //     (selectedMediaIndex - 1 + media.length) % media.length
  //   );
  // };

  // // Function to navigate to next media
  // const nextMedia = () => {
  //   setSelectedMediaIndex((selectedMediaIndex + 1) % media.length);
  // };


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
          className="text-white w-full h-full"
        >
          {galleryBanner?.map((gal, index) => (
            <SwiperSlide key={index}>
              <img
                src={gal.galImg}
                alt="coverimg "
                className=" w-full h-screen bg-black cursor-pointer object-cover"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Highlighted Gallery */}

      <span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
       
       <img
         loading="lazy"
         src={s4one}
         alt="img"
         className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
       />

       <img
         loading="lazy"
         src={s4two}
         alt="img"
         className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
       />

       <img
         loading="lazy"
         src={s4three}
         alt="img"
         className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
       />
    
   </span>


   <span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s4four}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4five}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4six}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s4seven}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4eight}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4nine}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s4ten}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4eleven}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4twelve}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s4thirteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4fourteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4fifteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s4sixteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4seventeen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4eighteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s4nineteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4twenty}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4twentyone}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />


 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s4twentytwo}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4twentythree}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4twentyfour}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s4twentyfive}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4twentysix}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s4twentyseven}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
       
       <img
         loading="lazy"
         src={s3one}
         alt="img"
         className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
       />

       <img
         loading="lazy"
         src={s3two}
         alt="img"
         className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
       />

       <img
         loading="lazy"
         src={s3three}
         alt="img"
         className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
       />
    
   </span>


   <span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s3four}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s3five}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s3six}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s3seven}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s3eight}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s3nine}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s3ten}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s3eleven}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s3twelve}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s3thirteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s3fourteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s3fifteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s3sixteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s3seventeen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s3eighteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s3nineteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s3twenty}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s3twentyone}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />


 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s3twentytwo}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s3twentythree}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s3twentyfour}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
       
       <img
         loading="lazy"
         src={s2one}
         alt="img"
         className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
       />

       <img
         loading="lazy"
         src={s2two}
         alt="img"
         className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
       />

       <img
         loading="lazy"
         src={s2three}
         alt="img"
         className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
       />
    
   </span>


   <span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s2four}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s2five}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s2six}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s2seven}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s2eight}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s2nine}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s2ten}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s2eleven}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s2twelve}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s2thirteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s2fourteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s2fifteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s2sixteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s2four}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s2eighteen}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
       
       <img
         loading="lazy"
         src={s1one}
         alt="img"
         className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
       />

<img
      loading="lazy"
      src={s1four}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
     
     <img
      loading="lazy"
      src={s1nine}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
     
    
   </span>


  



<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s1ten}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

<img
      loading="lazy"
      src={s1twenty}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

<img
      loading="lazy"
      src={s1four}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>





<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
   

   
 
</span>

<span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
    
    <img
      loading="lazy"
      src={s1twentyfour}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s1twentytwo}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />

    <img
      loading="lazy"
      src={s1twentythree}
      alt="img"
      className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
    />
 
</span>


      {/* <div className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3  gap-9 mt-5 md:px-16 px-6">
        {image?.slice(0, visibleImageCount).map((data, index) => (
          <img
            key={index}
            src={data.imageUrl}
            alt="img"
            loading="lazy"
            className=" bg-black  w-[23rem] h-[20rem]  rounded-2xl border-2 border-secondary  object-cover"
            onClick={() => openImageModal(index)}
          />
        ))}
      </div> */}
      {/* {loadMoreButtonVisible && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-secondary hover:bg-primary hover:border hover:border-secondary  text-white font-normal py-2 px-4 rounded mt-5"
            onClick={loadMoreImages}
          >
            See More...
          </button>
        </div>
      )} */}

      {/*  Media */}
      {/* <h1 className="font-semibold text-[30px] text-secondary underline text-center mt-16">
        Media
      </h1>
      <Marquee
        autoFill
        pauseOnHover
        speed={100}
        loop={0}
        gradientWidth={500}
        className="w-full  bg-red-0   mb-[4rem]   px-16 py-9"
      >
        <div className="flex justify-around items-center  gap-[2rem]">
          {media?.map((data, index) => (
            <span key={index}>
              <img
                src={data.imageUrl}
                alt="img"
                loading="lazy"
                className="w-[18rem]  h-[20rem]   rounded-xl border-2 border-secondary "
             
              />
            </span>
          ))}
        </div>
      </Marquee> */}
      {/* Image Modal */}

      {/* {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50 ">
          <button
            className="absolute top-4 right-4 text-white text-[39px] z-30 cursor-pointer"
            onClick={closeImageModal}
          >
            &times;
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-4 z-30 text-white text-[39px] cursor-pointer"
            onClick={() =>
              setSelectedImageIndex(
                (selectedImageIndex - 1 + image.length) % image.length
              )
            }
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-4 z-30 text-white text-[39px] cursor-pointer"
            onClick={() =>
              setSelectedImageIndex((selectedImageIndex + 1) % image.length)
            }
          >
            <IoIosArrowDroprightCircle />
          </button>

          <img
            src={image[selectedImageIndex].imageUrl}
            alt="img"
            loading="lazy"
            className="md:w-[39rem] md:h-[39rem] w-96 h-96 rounded-l-md "
          />
        </div>
      )} */}

      {/* Media Modal */}
      {/* {selectedMediaIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50">
          <button
            className="absolute top-1/2 -translate-y-1/2 transform left-4 text-white text-[39px] cursor-pointer z-30"
            onClick={prevMedia}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="absolute top-4 right-4 text-white text-[39px] cursor-pointer z-30"
            onClick={closeMediaModal}
          >
            &times;
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-[39px] cursor-pointer z-30"
            onClick={nextMedia}
          >
            <IoIosArrowDroprightCircle />
          </button>

          <img
            src={media[selectedMediaIndex].imageUrl}
            loading="lazy"
            alt="img"
            className="w-[39rem] h-[39rem] rounded-l-md"
          />

       
        </div>
      )} */}
    </>
  );
};

export default Gallery;
