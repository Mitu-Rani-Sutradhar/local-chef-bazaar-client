import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import MealsCard from "./MealsCard";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://local-chef-bazaar-server-two.vercel.app/meals")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
      });
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    console.log(value);

    // Search API call later
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50 min-h-screen">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Homemade Meals
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Explore Delicious Meals
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Browse freshly prepared homemade meals from talented local chefs and
            discover your next favorite dish.
          </p>

          <div className="mt-5 inline-flex bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow">
            {meals.length} Meals Available
          </div>
        </motion.div>

        {/* Search */}
        <motion.form
          onSubmit={handleSearchSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <div className="relative w-full sm:max-w-lg">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              name="search"
              placeholder="Search your favorite meal..."
              className="input input-bordered w-full pl-12 h-14 rounded-full focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="btn bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 h-14 border-none"
          >
            Search
          </button>
        </motion.form>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {meals.map((meal) => (
            <motion.div
              key={meal._id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{
                y: -10,
              }}
              transition={{ duration: 0.4 }}
            >
              <MealsCard meal={meal} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {meals.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-600">
              No Meals Found 🍽️
            </h3>

            <p className="text-gray-500 mt-3">
              Please check back later for delicious homemade meals.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Meals;