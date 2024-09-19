import React, { useEffect, useState } from "react";
import seVidthree from "../../assets/seVidthree.mp4";
import apiurl from "../../util";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sethreemo, sethreevidtab } from "../../assets";
import VideoComponent from "../../components/Components";
gsap.registerPlugin(ScrollTrigger);
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

      <span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
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
