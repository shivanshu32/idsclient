import React, { useEffect, useState } from "react";
import seVidtwo from "../../assets/seVidtwo.mp4";
import { setwoMo, setwovidtab } from "../../assets";

import { 
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
 s2twentyfive
 
   } from "../../assets/IDS/index"

import apiurl from "../../util";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoComponent from "../../components/Components";
gsap.registerPlugin(ScrollTrigger);
const Sesson2 = () => {
  const [image, setImage] = useState([]);

  const getImages = async () => {
    try {
      const response = await apiurl.get(`/getSeason/2`);
      setImage(response.data);
    } catch (err) {
      console.log(err);
    }
  };
 
  useEffect(() => {
    getImages();
  }, []);

  // const openImageModal = (index) => setSelectedImageIndex(index);
  // const closeImageModal = () => setSelectedImageIndex(null);

  // const prevImage = () =>
  //   setSelectedImageIndex(
  //     (selectedImageIndex - 1 + image.length) % image.length
  //   );
  // const nextImage = () =>
  //   setSelectedImageIndex((selectedImageIndex + 1) % image.length);

  return (
    <>
      <span className="relative flex justify-center">
       

        <VideoComponent deskvid={seVidtwo} mobvid={setwoMo} tabvid={setwovidtab} />

       
      </span>
      <span className="text-white text-center">
        <h1 className="font-semibold text-[30px] mt-16 text-secondary underline">
          IDS Season 2
        </h1>
        <p className="text-[15px] font-Lato font-extralight md:px-28 px-9 pt-5">
          Season 2 of the India Designer Show unfolded on December 26, 2021, at
          the exquisite Roseate House in New Delhi, unveiling the mesmerizing
          autumn-winter collection. The runway glittered with a diverse array of
          showcases: Rosy Ahluwalia kicked off the extravaganza with her opening
          show, followed by the conceptual brilliance of Kailash Chand Warqwala.
          Aashvik brought opulence in the third slot, while Surjeet Bawa's Coco
          added a dash of sophistication in the fourth. Amit Talwar mesmerized
          with bridal elegance in the fifth, followed by AS Couture's innovative
          designs and Arshi Singal's captivating Bare and Blur. Monika Bhagia's
          wedding couture stole hearts, with Steffi Patel as her showstopper.
          The lineup continued with Angad Creation from Jammu before culminating
          in the grand finale by Kari Gari, featuring Elakshi Gupta as their
          showstopper, radiating star-studded allure.
        </p>
      </span>

      <h1 className="font-semibold text-[30px] text-white text-center mt-10">
        Highlights
      </h1>

      {/* <span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
        {image?.map((data, index) => (
          <img
            key={index}
            src={data.imageUrl}
            loading="lazy"
            alt={`Highlight ${index + 1}`}
            className="w-[23rem] h-[20rem] rounded-2xl border-2 border-secondary  object-cover"
            onClick={() => openImageModal(index)}
          />
        ))}
      </span> */}

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





      {/* {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50">
          <button
            className="absolute top-4 right-4 text-white text-[39px] cursor-pointer"
            onClick={closeImageModal}
          >
            &times;
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-[39px] cursor-pointer"
            onClick={prevImage}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-[39px] cursor-pointer"
            onClick={nextImage}
          >
            <IoIosArrowDroprightCircle />
          </button>

          <img
            src={image[selectedImageIndex].imageUrl}
            loading="lazy"
            alt={`Selected Image ${selectedImageIndex + 1}`}
            className="md:w-[39rem] md:h-[39rem] w-96 h-96 rounded-l-md"
          />
        </div>
      )} */}
    </>
  );
};

export default Sesson2;
