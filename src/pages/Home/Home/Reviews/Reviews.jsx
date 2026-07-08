import React, { use } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import ReviewCard from "./ReviewCard";


const Reviews = ({ reviewsPromise }) => {

  const reviews = use(reviewsPromise);


  return (

    <section

      className="
      py-16
      px-5
      md:px-10
      lg:px-16
      rounded-3xl
      bg-gradient-to-br
      from-orange-50
      via-white
      to-yellow-100
      overflow-hidden
      "

    >


      <div className="
      max-w-7xl
      mx-auto
      ">


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.8
          }}

          className="
          text-center
          mb-12
          "

        >


          <h2

          className="
          text-3xl
          md:text-5xl
          font-bold
          text-gray-800
          "

          >

            Customer Reviews

          </h2>



          <p

          className="
          mt-4
          text-gray-600
          max-w-2xl
          mx-auto
          text-sm
          md:text-base
          "

          >

            A local food blog sharing what to eat in Singapore,
            the best food in Singapore, good food nearby you,
            and independent reviews of restaurants and cafes.

          </p>



        </motion.div>






        {/* Slider */}


        <motion.div

        initial={{
          opacity:0,
          scale:.9
        }}

        whileInView={{
          opacity:1,
          scale:1
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:.8
        }}

        >


        <Swiper

          loop={true}

          effect="coverflow"

          grabCursor={true}

          centeredSlides={true}


          breakpoints={{

            320:{
              slidesPerView:1,
            },


            640:{
              slidesPerView:2,
            },


            1024:{
              slidesPerView:3,
            }

          }}



          coverflowEffect={{

            rotate:25,

            stretch:0,

            depth:150,

            modifier:1,

            scale:0.85,

            slideShadows:true,

          }}


          autoplay={{

            delay:2500,

            disableOnInteraction:false

          }}


          pagination={{

            clickable:true

          }}


          modules={[
            EffectCoverflow,
            Pagination,
            Autoplay
          ]}


          className="
          mySwiper
          pb-12
          "

        >


          {
            reviews.map(review =>

              <SwiperSlide

              key={review._id}

              >

                <ReviewCard
                  review={review}
                />

              </SwiperSlide>

            )
          }


        </Swiper>


        </motion.div>



      </div>


    </section>

  );
};


export default Reviews;