import React from 'react';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import Slider1 from '../../../../images/sliders/slider6.jpg';
import Slider2 from '../../../../images/sliders/slider6-2.jpg';
import Slider3 from '../../../../images/sliders/slider6-3.jpg';

const Banner = () => {

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide className='relative'>
                <img src={Slider1} alt="slider1" srcSet="" />
            </SwiperSlide>
            <SwiperSlide><img src={Slider2} alt="slider1" srcSet="" /></SwiperSlide>
            <SwiperSlide><img src={Slider3} alt="slider1" srcSet="" /></SwiperSlide>


        </Swiper>
    )
};

export default Banner;