import React, { useEffect, useState } from "react";
import seVidone from "../../assets/seVidone.mp4";
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
 s1twentyfive
 
   } from "../../assets/IDS/index"
import apiurl from "../../util";
import { seoneMo, seonevidtab } from "../../assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoComponent from "../../components/Components";
const Seasson1 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [image, setImage] = useState([]);

  const getImages = async () => {
    try {
      const response = await apiurl.get(`/getSeason/1`);
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
       
        <VideoComponent deskvid={seVidone} mobvid={seoneMo} tabvid={seonevidtab} />
       
      </span>
      <span className="text-white text-center">
        <h1 className="font-semibold text-[30px] text-secondary underline mt-16">
          IDS Season1
        </h1>
        <p className="text-[15px] font-Lato font-extralight md:px-28 px-9 pt-5">
          The inaugural season, held on February 20, 2021, at the Roseate House
          in Aerocity, Delhi, marked a transition from winter to spring.
          Sponsored by E Motors - AB Motors and endorsed by the Indian Designer
          Show, the event showcased elegance and innovation. Rosy Ahluwalia
          graced the runway, featuring brands like Khadi India by Alini Fashion
          and Kailash Chand Warqwala's Concept Design, each displaying artistic
          brilliance. The grand finale by Ashwaq Ahmed dazzled the audience,
          with Miss Elakshi Gupta as the celebrity luminary, adding star-studded
          allure to Season 1.
        </p>
      </span>

      <h1 className="font-semibold text-[30px] font-Lato text-secondary underline text-center mt-10">
        Highlights
      </h1>

      {/* <span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
        {image.map((data, index) => (
          <img
            loading="lazy"
            key={index}
            src={data.imageUrl}
            alt={`Highlight ${index + 1}`}
            className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary   object-cover"
            onClick={() => openImageModal(index)}
          />
        ))}
      </span> */}

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

export default Seasson1;
