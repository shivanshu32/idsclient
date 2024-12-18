import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
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
 } from "../../assets/IDS";
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

const newData = [
  "/IDS/season4/1.jpg",
  "/IDS/season4/12.jpg",
 ]

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
      {/* {highlighted?.map((data =>
        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={data.imageUrl}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>
      ))} */}
{/* 
{newData?.map((data =>
        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={data}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>
      ))} */}

<SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4three}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4twelve}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4sixteen}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4twenty}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4nineteen}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4twentyone}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4twentytwo}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4seventeen}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4eighteen}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4fifteen}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        


        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4fourteen}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        
        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4thirteen}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4nine}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        
        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4ten}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        
        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4eleven}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>


        

        
        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4seven}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4six}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

        <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={s4five}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
        </SwiperSlide>

{/* <SwiperSlide className='w-[400px] h-[400px]'>
          <img src={data.imageUrl}  alt='img' loading='lazy' className='images w-full h-full bg-black object-cover '/>
</SwiperSlide> */}

        </span>
       
      </Swiper>
    </>
  );
}
