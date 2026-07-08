import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Why Supporting Local Chefs Matters",
    date: "June 10, 2026",
    author: "Comfort Kitchen Team",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800",
    description:
      "Supporting local chefs helps strengthen communities, promotes culinary diversity, and creates opportunities for talented food entrepreneurs.",
  },
  {
    id: 2,
    title: "Top 5 Homemade Meals Loved by Our Customers",
    date: "June 8, 2026",
    author: "Comfort Kitchen Team",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    description:
      "Discover the most popular homemade meals ordered through Comfort Kitchen and why customers keep coming back.",
  },
  {
    id: 3,
    title: "How to Choose the Perfect Meal Online",
    date: "June 5, 2026",
    author: "Food Expert",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    description:
      "Learn how ratings, ingredients, preparation time, and chef reviews help you choose the perfect homemade meal.",
  },
  {
    id: 4,
    title: "Healthy Eating with Local Ingredients",
    date: "June 1, 2026",
    author: "Nutrition Specialist",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    description:
      "Explore the benefits of fresh local ingredients and how local chefs prepare nutritious homemade dishes.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Blog = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50 min-h-screen">
      <div className="w-11/12 max-w-7xl mx-auto">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <span className="text-orange-500 font-semibold uppercase tracking-[3px]">
            Latest Articles
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Comfort Kitchen Blog
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8">
            Food stories, chef insights, cooking tips and community updates
            from Comfort Kitchen.
          </p>
        </motion.div>

        {/* Featured Blog */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-xl overflow-hidden mb-20"
        >
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200"
              alt=""
              className="w-full h-full object-cover hover:scale-105 duration-500"
            />
          </div>

          <div className="p-10">

            <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
              Featured Story
            </span>

            <h2 className="text-4xl font-bold mt-6">
              Bringing Homemade Food Closer to Everyone
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              At Comfort Kitchen, we believe everyone deserves authentic,
              homemade meals. Our platform connects passionate local chefs
              with food lovers while creating a stronger food community.
            </p>

            <button className="btn bg-orange-500 hover:bg-orange-600 border-none text-white rounded-full mt-8">
              Read Full Story
            </button>

          </div>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={item}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 duration-500"
                />
              </div>

              <div className="p-6">

                <div className="flex justify-between text-sm text-gray-500 mb-4">

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-orange-500"/>
                    {blog.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaUser className="text-orange-500"/>
                    {blog.author}
                  </div>

                </div>

                <h2 className="text-2xl font-bold mb-4">
                  {blog.title}
                </h2>

                <p className="text-gray-600 leading-7">
                  {blog.description}
                </p>

                <button className="btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full mt-6">
                  Read More
                  <FaArrowRight />
                </button>

              </div>
            </motion.div>
          ))}
        </motion.div>
                {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">

            <h2 className="text-3xl md:text-4xl font-bold">
              Stay Updated
            </h2>

            <p className="max-w-2xl mx-auto mt-4 text-orange-100 leading-8">
              Subscribe to receive delicious recipes, cooking tips,
              chef stories, and the latest updates from Comfort Kitchen.
            </p>

            <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full sm:w-96 rounded-full text-black"
              />

              <button
                type="submit"
                className="btn bg-white text-orange-500 hover:bg-orange-100 border-none rounded-full px-8"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Every Meal Has a Story 🍽️
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
            Our mission is to connect passionate local chefs with people who
            love authentic homemade food. Read inspiring stories, discover
            new recipes, and become part of the Comfort Kitchen community.
          </p>

          <button className="btn bg-orange-500 hover:bg-orange-600 border-none text-white rounded-full mt-8 px-8">
            Explore More Articles
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Blog;