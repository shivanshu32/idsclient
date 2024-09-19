import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './cro.css'
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';


import apiurl from '../../util.jsx';

export default function Crousel() {
  const [highlighted, setHighlighted] = useState();

const getHighlightedImages = async () => {
  try{
 const response = await apiurl.get('/getHighlight');
 setHighlighted(response.data);
  }
  catch(error){
    console.log(error)
  }
}

useEffect(()=>{
  getHighlightedImages(); 
}, [])
  return (
    <>

    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper mt-3 w-full h-full bg-black"
      >
      <span>
      {highlighted?.map((data =>
        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={data.imageUrl}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>))}
        </span>
       
      </Swiper>
    </>
  );
}
