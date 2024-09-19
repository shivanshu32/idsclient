import React, { useEffect, useState } from "react";
import pro from "../assets/pro.png";
import { Partners, brandp } from "../assets";
import apiurl from "../util";

const Partner = () => {
  const [partnersData, setPartnersData] = useState([]);
  const [expandedCards, setExpandedCards] = useState({});

  const getPartnersData = async () => {
    try {
      const response = await apiurl.get(`/getBrand`);
      setPartnersData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPartnersData();
  }, []);

  const toggleExpanded = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <span>
        <img
          src={Partners}
          alt="img"
          className="w-full md:h-screen sm:h-screen object-fill"
        />
      </span>

      <h1 className="font-semibold text-[30px] text-center mt-16 text-secondary underline">
        Associate Brand Partners
      </h1>
      <span className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-3 gap-9 mt-5 md:px-16 px-6 mb-20">
        {partnersData?.map((item, index) => (
          <span
            key={index}
            className="flex flex-col justify-center items-center mt-9 border-2 rounded-2xl border-secondary text-white w-full h-full"
          >
            <span className="flex flex-col justify-center items-center mt-5">
              <img
                src={item.imageUrl}
                alt="img"
                className="w-full h-16 rounded-md  zoom bg-white"
              />
              <p className="mt-3 mb-2">{item.brandName}</p>
            </span>

            <span className="gradient py-3 rounded-b-2xl mt-2 w-full h-full">
              <p className="px-5 text-[13px] font-montserrat font-normal">
                {expandedCards[index]
                  ? item.description
                  : `${item.description.substring(0, 100)}...`}
                <button
                  onClick={() => toggleExpanded(index)}
                  className="text-secondary ml-2"
                >
                  {expandedCards[index] ? "See less" : "See more"}
                </button>
              </p>
            </span>
          </span>
        ))}
      </span>
    </>
  );
};

export default Partner;
