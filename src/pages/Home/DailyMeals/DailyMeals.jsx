import React, { use } from "react";
import { motion } from "framer-motion";
import DailyMealCard from "./DailyMealCard";


const DailyMeals = ({ mealsPromise }) => {

  const meals = use(mealsPromise);


  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };


  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };



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
            y:-40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.7
          }}

          className="
          text-center
          mb-12
          "

        >

          <h2

          className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-bold
          text-gray-800
          "

          >

            Daily Meals 🍽️

          </h2>



          <p

          className="
          mt-4
          text-gray-600
          max-w-2xl
          mx-auto
          "

          >

            Fresh and delicious homemade meals prepared by
            our trusted local chefs every day.

          </p>


        </motion.div>






        {/* Meals Grid */}


        <motion.div

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once:true
          }}


          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
          "

        >


          {
            meals.map(meal =>

              <motion.div

              key={meal._id}

              variants={cardVariants}


              whileHover={{
                y:-8,
                scale:1.03
              }}


              transition={{
                duration:.3
              }}

              >

                <DailyMealCard
                  meal={meal}
                />


              </motion.div>

            )
          }


        </motion.div>




      </div>



    </section>

  );

};


export default DailyMeals;