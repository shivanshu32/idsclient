import React, { useEffect, useState } from "react";
import seVidthree from "../../assets/seVidthree.mp4";
import apiurl from "../../util";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sethreemo, sethreevidtab } from "../../assets";
import VideoComponent from "../../components/Components";
gsap.registerPlugin(ScrollTrigger);
import { 
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
 
 
   } from "../../assets/IDS/index"
const Sesson3 = () => {
  const [image, setImage] = useState([]);
  // const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const getImages = async () => {
    try {
      const response = await apiurl.get(`/getSeason/3`);
      setImage(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   gsap.from(".popimg", {
  //     opacity: 0,
  //     scale: 0.5,
  //     ease: "back",
  //     duration: 0.5,
  //     stagger: 0.8,
  //   });
  // }, []);

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
       
        <VideoComponent deskvid={seVidthree} mobvid={sethreemo} tabvid={sethreevidtab} />
      </span>
      <span className="text-white text-center">
        <h1 className="font-semibold text-[30px] mt-16 text-secondary underline">
          IDS Season 3
        </h1>
        <p className="text-[15px] font-Lato font-extralight md:px-28 px-9 pt-5">
          Season 3 of the India Designer Show dazzled on July 2, 2022, at the
          prestigious Roseate House in New Delhi, unveiling the vibrant
          spring-summer collection. The runway was ablaze with creativity: Rosy
          Ahluwalia set the stage aglow with her opening show, featuring
          celebrity showstopper Shivani Kashyap. Kailash Chand Warqwala's
          Concept Design followed suit, paving the way for Rinku Reh Das's
          elegant Jute Sari showcase. Aditi Jain's Pre-wedding Dresses stole the
          spotlight with Steffi Patel as their celebrity showstopper. Niharika
          Sharma wowed with her Indo-Western collection, while Chitwan Wazir
          showcased JnK Culture dresses. Maninder Gulati's She-La added a touch
          of sophistication, and FDDI presented new young talented designers,
          with Kainaat Arora as their celebrity showstopper. The grand finale by
          Amit Bhardwaj showcased Miami fashion, featuring Hena Khan as the
          showstopper, culminating the evening in a blaze of glamour and style.
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
            className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
            onClick={() => openImageModal(index)}
          />
        ))}
      </span> */}

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
            loading="lazy"
            src={image[selectedImageIndex].imageUrl}
            alt={`Selected Image ${selectedImageIndex + 1}`}
            className="md:w-[39rem] md:h-[39rem] w-96 h-96 rounded-l-md"
          />
        </div>
      )} */}
    </>
  );
};

export default Sesson3;
