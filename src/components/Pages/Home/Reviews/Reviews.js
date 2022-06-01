import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import StarRatings from 'react-star-ratings'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import './Reviews.css';

import { Pagination, Navigation } from "swiper";
import useLoadAllReview from "../../../../Hooks/useLoadAllReview";
import Avatar from '../../../../images/avatar.png';

const Reviews = () => {
    const [reviews, setReviews] = useLoadAllReview()
    console.log(reviews);
    return (
        <div className="py-16 z-0">
            <h1 className="text-center uppercase font-extrabold text-5xl pb-9">reviews</h1>
            <Swiper

                slidesPerView={3.5}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper container z-5"
            >
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="reviewCard shadow-xl">
                            <figure className="">
                                <img src={Avatar} alt="avatar" className="rounded-xl w-32 mx-auto " />
                            </figure>
                            <div className="card-body items-center text-center">

                                <h2 className="card-title uppercase">{review.name}</h2>
                                <p className="text-sm">"<i>{review.review}</i>"</p>
                                <p className="text-sm">{review?.rating ? `Ratings : ${review.rating}` : ''}</p>

                            </div>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </div >
    );
};

export default Reviews;