
const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">About Local Chef Bazaar</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Connecting talented local chefs with food lovers who crave authentic,
          homemade, and delicious meals.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-7">
            Local Chef Bazaar was created to empower local chefs by providing
            them with a platform to showcase their culinary talents and connect
            directly with customers. We help food lovers discover unique,
            freshly prepared meals while supporting independent chefs in their
            communities.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba"
            alt="Chef Cooking"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Fresh & Homemade
            </h3>
            <p className="text-gray-600">
              Enjoy meals prepared with care using fresh ingredients from
              talented local chefs.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Support Local Chefs
            </h3>
            <p className="text-gray-600">
              Every order helps independent chefs grow their business and reach
              more customers.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Diverse Cuisine
            </h3>
            <p className="text-gray-600">
              Discover a wide variety of dishes and flavors from different
              culinary traditions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-20">
        <div className="p-6 rounded-xl bg-base-200">
          <h3 className="text-4xl font-bold">500+</h3>
          <p className="mt-2">Meals Listed</p>
        </div>

        <div className="p-6 rounded-xl bg-base-200">
          <h3 className="text-4xl font-bold">100+</h3>
          <p className="mt-2">Local Chefs</p>
        </div>

        <div className="p-6 rounded-xl bg-base-200">
          <h3 className="text-4xl font-bold">5K+</h3>
          <p className="mt-2">Orders Delivered</p>
        </div>

        <div className="p-6 rounded-xl bg-base-200">
          <h3 className="text-4xl font-bold">98%</h3>
          <p className="mt-2">Customer Satisfaction</p>
        </div>
      </div> */}

      {/* Vision Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-gray-600 leading-7">
          We envision a world where talented local chefs can easily share their
          passion for food and customers can enjoy authentic meals made with
          love. Through Local Chef Bazaar, we aim to strengthen communities,
          support local businesses, and celebrate culinary creativity.
        </p>
      </div>
    </div>
  );
};

export default About;