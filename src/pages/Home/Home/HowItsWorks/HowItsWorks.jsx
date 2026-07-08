import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    icon: "🔍",
    title: "Browse Meals",
    description:
      "Explore a variety of homemade dishes from local chefs and discover meals that match your taste.",
  },
  {
    id: 2,
    icon: "🛒",
    title: "Place Your Order",
    description:
      "Select your favorite meals, choose the quantity, and place your order securely online.",
  },
  {
    id: 3,
    icon: "👨‍🍳",
    title: "Chef Prepares",
    description:
      "Your selected chef freshly prepares the meal using quality ingredients and authentic recipes.",
  },
  {
    id: 4,
    icon: "🍽️",
    title: "Enjoy Your Meal",
    description:
      "Receive your freshly prepared meal and enjoy a delicious homemade dining experience.",
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

const HowItsWorks = () => {
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
            Easy Process
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            How It Works
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Ordering delicious homemade meals is simple. Follow these four easy
            steps and enjoy fresh food prepared with care.
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
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 text-center border border-orange-100 overflow-hidden group"
            >
              {/* Number */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
                {step.id}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 12, scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-5xl mb-6 group-hover:bg-orange-500 duration-300"
              >
                <span className="group-hover:scale-110 duration-300">
                  {step.icon}
                </span>
              </motion.div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>

              <p className="text-gray-600 leading-7">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItsWorks;