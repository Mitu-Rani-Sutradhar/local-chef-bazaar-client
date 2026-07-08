import React from "react";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaUsers,
  FaLeaf,
  FaHeart,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Hero */}
      <div className="py-20">
        <div className="w-11/12 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            About <span className="text-orange-500">Comfort Kitchen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8"
          >
            Connecting talented local chefs with food lovers who crave
            authentic, homemade, and delicious meals.
          </motion.p>
        </div>
      </div>

      {/* Mission */}
      <div className="w-11/12 max-w-7xl mx-auto py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8">
              Comfort Kitchen empowers local chefs by providing a platform
              where they can showcase their culinary skills and connect
              directly with customers. We help food lovers discover fresh,
              authentic meals while supporting independent chefs and
              strengthening local communities.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800"
            alt="Chef"
            className="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
          />
        </div>
      </div>

      {/* Features */}
      <div className="w-11/12 max-w-7xl mx-auto py-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Why Choose Us?
          </h2>

          <p className="text-gray-600 mt-4">
            We bring together quality, trust, and authentic homemade flavors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaUtensils />,
              title: "Fresh Meals",
              desc: "Every meal is freshly prepared using quality ingredients.",
            },
            {
              icon: <FaUsers />,
              title: "Support Chefs",
              desc: "Help talented local chefs grow their business.",
            },
            {
              icon: <FaLeaf />,
              title: "Healthy Food",
              desc: "Homemade recipes made with love and care.",
            },
            {
              icon: <FaHeart />,
              title: "Trusted Community",
              desc: "Thousands of happy customers trust our platform.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-lg p-8 text-center border border-orange-100"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-4xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vision */}
      <div className="w-11/12 max-w-5xl mx-auto py-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Our Vision
        </motion.h2>

        <p className="text-gray-600 leading-8 text-lg">
          We envision a future where every talented local chef has the
          opportunity to share their passion with the world, while customers
          enjoy authentic homemade meals that bring families and communities
          together.
        </p>
      </div>
    </section>
  );
};

export default About;