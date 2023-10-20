// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './CardSlider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import React from 'react'
import { useEffect, useState } from 'react';
import { getSpeakers } from '../../api/Api';

const CardSlider = () => {


    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
      getAllSpeakers();
    }, []);
  
    const getAllSpeakers = async () => {
      let response = await getSpeakers();
      setSpeakers(response.data);
    };
  return (
    <>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
{speakers.map((speaker) => (
     <SwiperSlide key={speaker._id}>
     <img src={speaker.speakerimage} alt={`Slide ${speaker._id}`} />
   </SwiperSlide>
))}
   
    </Swiper>
  </>
  )
}

export default CardSlider
