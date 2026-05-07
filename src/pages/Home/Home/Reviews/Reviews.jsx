
import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);
    return (
        <div className='mb-8'>
            <div className='pb-6'>
                <h2 className='text-primary text-4xl font-bold text-center mt-5'>Review</h2>
                <p className='text-center p-5'>A local food blog sharing what to eat in Singapore,<br /> the best food in Singapore, good food nearby you, and independent reviews of restaurants and cafes.</p>
            </div>

            <>
      <Swiper
        loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
            delay:2000,
            disableOnInteraction:false
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
      {
        reviews.map(review => <SwiperSlide key={review._id}>
          <ReviewCard review={review}></ReviewCard>
        </SwiperSlide>)
      }
       
      </Swiper>
    </>
    

         
        </div>
    );
};

export default Reviews;