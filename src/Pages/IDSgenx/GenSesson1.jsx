import React, { useEffect, useState } from "react";
import { genOneVidmob, genx1, genxonem } from "../../assets";
import apiurl from "../../util";

import VideoComponent from "../../components/Components";
const GenSesson1 = () => {
  const [image, setImage] = useState([]);
  // const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const getImages = async () => {
    try {
      const response = await apiurl.get(`/getGenXOrPaidMedia?value=genx`);
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

<VideoComponent
          deskvid={genx1}
          tabvid={genOneVidmob}
          mobvid = {genxonem}
        />

      <span className="text-white text-center">
        <h1 className="font-semibold text-[30px] mt-16 text-secondary underline">
          IDS Gen-NEX 1.0
        </h1>
        <p className="text-[15px] text-light md:px-28 px-9 pt-5">
          IDS Gen-NEX is dedicated to highlighting the exceptional qualities of
          Indian designs, blending the rich heritage of Indian culture with
          world-class creativity. This annual event is a platform for emerging
          designers to showcase their creative talents, innovation, and unique
          visions in the fashion industry. By providing this stage, IDS Gen-NEX
          allows young designers to express their creativity, push the
          boundaries of fashion, and establish their presence in the industry.
          The event is pivotal in supporting the growth of the future of Indian
          fashion, acting as a catalyst for the success of these new talents​.
          The IDS Gen-NEX event features a mix of traditional elements and
          contemporary trends, celebrating the diversity and richness of Indian
          design. It includes runway shows and exhibitions that display the work
          of various young designers, emphasizing intricate craftsmanship and
          vibrant colors. The event is not only a showcase but also an
          opportunity for designers to gain exposure and connect with potential
          buyers and fashion enthusiasts.
        </p>
      </span>

      <h1 className="font-semibold text-[30px] text-secondary underline text-center mt-10">
        Highlights
      </h1>

      <span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6">
        {image.map((data, index) => (
          <img
            key={index}
            src={data.imageUrl}
            alt={`Highlight ${index + 1}`}
            className="w-[23rem] h-[20rem] rounded-2xl border-2 border-secondary  object-cover"
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
              src={image[selectedImageIndex].imageUrl}
              alt={`Selected Image ${selectedImageIndex + 1}`}
              className="md:w-[39rem] md:h-[39rem] w-96 h-96 rounded-l-md"
            />
         
        </div>
      )} */}
    </>
  );
};

export default GenSesson1;
