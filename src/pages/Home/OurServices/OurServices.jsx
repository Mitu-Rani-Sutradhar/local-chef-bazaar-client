import React from "react";
import { motion } from "framer-motion";


const OurServices = () => {


  const services = [
    {
      icon: "👨‍🍳",
      title: "Local Chef Marketplace",
      description:
        "Discover unique dishes and connect directly with talented chefs in your community.",
    },

    {
      icon: "📱",
      title: "Easy Online Ordering",
      description:
        "Browse menus, compare meals, and place orders through a simple and user-friendly platform.",
    },

    {
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "Get your favorite meals delivered fresh and on time right to your doorstep.",
    },

    {
      icon: "💳",
      title: "Secure Payments",
      description:
        "Enjoy safe and secure payment options for a worry-free ordering experience.",
    },

    {
      icon: "⭐",
      title: "Daily Meal Specials",
      description:
        "Explore new chef-crafted dishes and exciting daily offers available exclusively on Local Chef Bazaar.",
    },

  ];



  const containerVariants = {

    hidden:{
      opacity:0
    },

    visible:{
      opacity:1,

      transition:{
        staggerChildren:0.15
      }
    }

  };



  const cardVariants = {

    hidden:{
      opacity:0,
      y:50
    },

    visible:{
      opacity:1,
      y:0,

      transition:{
        duration:.6
      }
    }

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

            Our Services 🍽️

          </h2>


          <p

          className="
          mt-4
          text-gray-600
          max-w-2xl
          mx-auto
          "

          >

            We make your food experience easier with trusted chefs,
            fresh meals and secure ordering.

          </p>


        </motion.div>







        {/* Service Cards */}


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
          gap-8
          "

        >



          {
            services.map((service,index)=>(


              <motion.div

                key={index}

                variants={cardVariants}


                whileHover={{
                  y:-8,
                  scale:1.03
                }}


                className="
                bg-white
                p-6
                rounded-3xl
                shadow-md
                border
                border-orange-100
                hover:shadow-xl
                transition
                "

              >


                <div

                className="
                text-4xl
                mb-4
                "

                >

                  {service.icon}

                </div>



                <h3

                className="
                text-xl
                md:text-2xl
                font-bold
                text-gray-800
                mb-3
                "

                >

                  {service.title}

                </h3>



                <p

                className="
                text-gray-600
                leading-relaxed
                "

                >

                  {service.description}

                </p>



              </motion.div>


            ))
          }



        </motion.div>



      </div>


    </section>

  );

};


export default OurServices;