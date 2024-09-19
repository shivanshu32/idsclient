import React, { useEffect, useState } from "react";
import apiurl from "../../util";

import { seVidfour, sefourMo, sefourvidtab } from "../../assets";
import VideoComponent from "../../components/Components";
const Sesson4 = () => {
  const [image, setImage] = useState([]);
  // const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const getImages = async () => {
    try {
      const response = await apiurl.get(`/getSeason/4`);
      setImage(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getImages();
  }, []);


  // const openModal = (index) => {
  //   setSelectedImageIndex(index);
  // };

  // const closeModal = () => {
  //   setSelectedImageIndex(null);
  // };

  // const showNextImage = () => {
  //   if (selectedImageIndex !== null) {
  //     setSelectedImageIndex((prevIndex) => (prevIndex + 1) % image.length);
  //   }
  // };

  // const showPreviousImage = () => {
  //   if (selectedImageIndex !== null) {
  //     setSelectedImageIndex(
  //       (prevIndex) => (prevIndex - 1 + image.length) % image.length
  //     );
  //   }
  // };

  return (
    <>
      <span className="relative flex justify-center">
     

        <span>
          <VideoComponent deskvid={seVidfour} mobvid={sefourMo} tabvid={sefourvidtab}/>

        </span>
      </span>
      <span className="text-white text-center">
        <h1 className="font-semibold font-Lato  text-[30px] mt-16 text-secondary underline">
          IDS Season 4
        </h1>
        <p className="text-[15px] font-Lato font-extralight  md:px-28 px-9 pt-5">
          Season 4 of the India Designer Show unfolded on December 18, 2021, at
          the iconic Major Dhyan Chand Stadium in New Delhi, with Innoworks
          Co-working Space as the presenting partner, among others. The evening
          commenced with Rosy Ahluwalia Khadi India showcase, featuring Georgia
          Andrani as the showstopper. Shiwani Kashyap followed suit with her
          captivating show, with Mannara Chopra as the celebrity showstopper.
          Shubhi Garg presented an Indo-Western collection, while Ranng stole
          hearts with their Maternity collection. Shravan Kumar showcased
          Traditional wear, with Arbaaz Khan and Shinni Shetty gracing the ramp
          as celebrity showstoppers. Manali Jagtap enchanted with her designs,
          featuring Ridhima Pandit as the showstopper. Meeami Fashion by Amit
          Bharadwaj presented Western wear with Nargis Fakhri as the
          showstopper. Ken Ferns' Dash Collection captivated the audience, with
          Shehnaaz Gill as the showstopper. Presto Couture by Deepak Sharma
          showcased Indo-Western designs with Daisy Shah as the showstopper,
          culminating the evening in a symphony of fashion and glamour. The
          grand finale designer Rocky Star presented Festive Collection design
          with Sonakshi Sinha as a Showstopper.
        </p>
      </span>

      <h1 className="font-semibold text-[30px] text-secondary underline text-center mt-10">
        Highlights
      </h1>

      <span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
        {image?.map((data, index) => (
          <img
            loading="lazy"
            key={index}
            src={data.imageUrl}
            alt="img"
            className="w-[23rem] h-[20rem] rounded-2xl border-2  border-secondary object-cover "
            onClick={() => openModal(index)}
          />
        ))}
      </span>

      {/* {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-80">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <button
            className="absolute left-5 text-white text-5xl"
            onClick={showPreviousImage}
          >
            <IoIosArrowDropleftCircle />
          </button>

          <img
            src={image[selectedImageIndex].imageUrl}
            alt="img"
            loading="lazy"
            className="md:w-[39rem] md:h-[39rem] w-96 h-96 rounded-l-md"
          />

          <button
            className="absolute right-5 text-white text-5xl"
            onClick={showNextImage}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      )} */}
    </>
  );
};

export default Sesson4;
