import React from "react";
import food1Img from "../../../assets/food-1.png";
import food2Img from "../../../assets/food-2.png";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Banner = () => {

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };


  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };


  return (
    <section
      className="
      min-h-[70vh]
      overflow-hidden
      rounded-3xl
      bg-gradient-to-br
      from-orange-50
      via-amber-50
      to-yellow-100
      px-5
      py-10
      md:px-10
      lg:px-16
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-10
        items-center
        "
      >


        {/* Left Content */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
          text-center
          lg:text-left
          "
        >

          <motion.h1
            variants={itemVariants}
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            leading-tight
            text-gray-800
            "
          >

            Fresh Homemade Food

            <span
              className="
              block
              text-orange-500
              mt-2
              "
            >
              Delivered With Love ❤️
            </span>

          </motion.h1>



          <motion.p
            variants={itemVariants}
            className="
            mt-5
            text-gray-600
            text-base
            md:text-lg
            max-w-xl
            mx-auto
            lg:mx-0
            "
          >
            Enjoy delicious homemade meals prepared by talented local chefs.
            Order fresh food and experience authentic taste from your nearby
            kitchen.
          </motion.p>



          <motion.div
            variants={itemVariants}
            className="mt-8"
          >

            <Link to="/meals">

              <motion.button
                whileHover={{
                  scale: 1.08,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                className="
                bg-orange-500
                hover:bg-orange-600
                text-white
                font-semibold
                px-8
                py-3
                rounded-full
                shadow-lg
                transition
                "
              >
                Order Now 🍽️

              </motion.button>

            </Link>

          </motion.div>


        </motion.div>





        {/* Right Image Section */}

        <motion.div
          initial={{
            opacity: 0,
            x: 120,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 1,
            ease: "easeOut",
          }}

          className="
          relative
          flex
          justify-center
          items-center
          "
        >


          {/* Main Food Image */}

          <motion.img
            src={food1Img}
            alt="Fresh Food"
            className="
            w-full
            max-w-md
            rounded-3xl
            shadow-2xl
            "
            
            animate={{
              y: [0, -15, 0],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />



          {/* Small Floating Image */}

          <motion.img
            src={food2Img}
            alt="Food"
            
            className="
            absolute
            bottom-3
            left-2
            w-28
            sm:w-36
            md:w-44
            lg:w-52
            rounded-2xl
            border-4
            border-white
            shadow-xl
            "

            initial={{
              opacity: 0,
              scale: 0.5,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.8,
              delay: 0.7,
            }}

          />



        </motion.div>


      </div>


    </section>
  );
};

export default Banner;