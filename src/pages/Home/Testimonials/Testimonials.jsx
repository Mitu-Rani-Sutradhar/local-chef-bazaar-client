import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Enthusiast",
    image: "https://i.pravatar.cc/150?img=32",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Comfort Kitchen made it so easy to enjoy authentic homemade meals. Every order has been fresh, delicious, and delivered with care.",
  },
  {
    id: 2,
    name: "David Wilson",
    role: "Regular Customer",
    image: "https://i.pravatar.cc/150?img=15",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "I love supporting local chefs while discovering amazing recipes. The platform is simple, secure, and reliable.",
  },
  {
    id: 3,
    name: "Emily Brown",
    role: "Home Food Lover",
    image: "https://i.pravatar.cc/150?img=45",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "The quality of meals exceeded my expectations. Fresh ingredients, authentic flavors, and outstanding customer experience.",
  },
  {
    id: 4,
    name: "Michael Lee",
    role: "Verified Customer",
    image: "https://i.pravatar.cc/150?img=12",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "From ordering to delivery, everything was smooth. I highly recommend Comfort Kitchen to anyone who loves homemade food.",
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

const Testimonials = () => {
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
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            What Our Customers Say
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Thousands of food lovers trust Comfort Kitchen to discover
            authentic homemade meals prepared by talented local chefs.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-orange-100 rounded-3xl shadow-lg hover:shadow-2xl p-8 text-center"
            >
             

              <div className="text-yellow-500 text-lg mt-4">
                {item.rating}
              </div>

              <p className="text-gray-600 italic leading-7 mt-4">
                "{item.review}"
              </p>

              <h3 className="font-bold text-xl mt-6">
                {item.name}
              </h3>

              <p className="text-orange-500 text-sm font-medium">
                {item.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;