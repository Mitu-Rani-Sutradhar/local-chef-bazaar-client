

const OurServices = () => {
  return (
    <section className="py-16">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold">Our Services</h2>
    <p className="mt-4 max-w-2xl mx-auto">
      From homemade meals to doorstep delivery, Local Chef Bazaar connects
      food lovers with talented local chefs for a delicious dining experience.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-semibold mb-3">
        🍽️ Fresh Homemade Meals
      </h3>
      <p>
        Enjoy freshly prepared meals crafted with quality ingredients by
        experienced local chefs.
      </p>
    </div>

    <div className="p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-semibold mb-3">
        👨‍🍳 Local Chef Marketplace
      </h3>
      <p>
        Discover unique dishes and connect directly with talented chefs in
        your community.
      </p>
    </div>

    <div className="p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-semibold mb-3">
        📱 Easy Online Ordering
      </h3>
      <p>
        Browse menus, compare meals, and place orders through a simple and
        user-friendly platform.
      </p>
    </div>

    <div className="p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-semibold mb-3">
        🚚 Fast Delivery
      </h3>
      <p>
        Get your favorite meals delivered fresh and on time right to your
        doorstep.
      </p>
    </div>

    <div className="p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-semibold mb-3">
        💳 Secure Payments
      </h3>
      <p>
        Enjoy safe and secure payment options for a worry-free ordering
        experience.
      </p>
    </div>

    <div className="p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-semibold mb-3">
        ⭐ Daily Meal Specials
      </h3>
      <p>
        Explore new chef-crafted dishes and exciting daily offers available
        exclusively on Local Chef Bazaar.
      </p>
    </div>
  </div>
</section>
  );
};

export default OurServices;