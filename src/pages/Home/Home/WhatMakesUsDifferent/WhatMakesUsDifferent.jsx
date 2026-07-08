import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: "👨‍🍳",
    title: "Local Talented Chefs",
    description:
      "Discover meals prepared by skilled local chefs who are passionate about sharing their unique recipes and cooking styles.",
  },
  {
    id: 2,
    icon: "🍲",
    title: "Authentic Homemade Food",
    description:
      "Enjoy fresh, homemade dishes crafted with care, quality ingredients, and authentic flavors you won't find everywhere.",
  },
  {
    id: 3,
    icon: "⭐",
    title: "Trusted Reviews",
    description:
      "Make informed choices by reading genuine customer reviews and ratings from food lovers in the community.",
  },
  {
    id: 4,
    icon: "❤️",
    title: "Community Driven",
    description:
      "Support local chefs while enjoying delicious meals, helping build a stronger and more connected food community.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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
    },
  },
};

const WhatMakesUsDifferent = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            What Makes Us Different
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            We connect passionate local chefs with food lovers, offering
            authentic homemade meals, trusted experiences, and a vibrant food
            community.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 text-center border border-orange-100 overflow-hidden group"
            >
              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
                {feature.id}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-5xl mb-6 group-hover:bg-orange-500 duration-300"
              >
                <span className="group-hover:scale-110 duration-300">
                  {feature.icon}
                </span>
              </motion.div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;