```jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import MealsCard from "./MealsCard";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://local-chef-bazaar-server-two.vercel.app/meals")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
        setLoading(false);
      });
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    console.log(value);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50 min-h-screen">
      <div className="w-11/12 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Homemade Meals
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Explore Delicious Meals
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Browse freshly prepared homemade meals from talented local chefs
            and discover your next favorite dish.
          </p>

          <div className="mt-5 inline-flex bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow">
            {meals.length} Meals Available
          </div>
        </motion.div>

        {/* Search */}
        <form
          onSubmit={handleSearchSubmit}
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
        </form>

        {/* Loading */}
        {loading ? (
          <div className="text-center py-20">
            <span className="loading loading-spinner loading-lg text-orange-500"></span>

            <p className="mt-4 text-gray-500">
              Loading delicious meals...
            </p>
          </div>
        ) : meals.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-600">
              No Meals Found 🍽️
            </h3>

            <p className="text-gray-500 mt-3">
              Please check back later for delicious homemade meals.
            </p>
          </div>
        ) : (
          /* Cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {meals.map((meal) => (
              <motion.div
                key={meal._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
              >
                <MealsCard meal={meal} />
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Meals;
```

### কী কী update হলো

* ✅ `loading` state যোগ করেছি
* ✅ API load হওয়ার সময় সুন্দর loading spinner দেখাবে
* ✅ `whileInView` বাদ দিয়েছি
* ✅ `staggerChildren` বাদ দিয়েছি
* ✅ সব card data আসার পর দ্রুত render হবে
* ✅ API error হলে console-এ error দেখাবে
* ✅ কোনো meal না থাকলে `No Meals Found` দেখাবে
* ✅ Card-এর ছোট animation রাখা হয়েছে
* ✅ তোমার search section একই রাখা হয়েছে

**এখন এই code বসিয়ে run করো।** Card যদি তারপরও অনেক দেরিতে আসে, তাহলে পরের ধাপে আমরা `MealsCard`-এর image loading optimize করব—সেটা করলে page আরও দ্রুত feel করবে।
