import React from 'react';

const HowItsWorks = () => {
    return (
        <div>
            <section className="py-16">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold">How Local Chef Bazaar Works</h2>
    <p className="mt-4 max-w-2xl mx-auto text-gray-600">
      Ordering delicious homemade meals has never been easier. Follow these
      simple steps to enjoy food prepared by talented local chefs.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

    <div className="bg-base-100 shadow-lg rounded-xl p-6 text-center">
      <div className="text-5xl mb-4">🔍</div>
      <h3 className="text-xl font-bold mb-2">Browse Meals</h3>
      <p className="text-gray-600">
        Explore a variety of homemade dishes from local chefs and discover
        meals that match your taste.
      </p>
    </div>

    <div className="bg-base-100 shadow-lg rounded-xl p-6 text-center">
      <div className="text-5xl mb-4">🛒</div>
      <h3 className="text-xl font-bold mb-2">Place Your Order</h3>
      <p className="text-gray-600">
        Select your favorite meals, choose the quantity, and place your
        order securely online.
      </p>
    </div>

    <div className="bg-base-100 shadow-lg rounded-xl p-6 text-center">
      <div className="text-5xl mb-4">👨‍🍳</div>
      <h3 className="text-xl font-bold mb-2">Chef Prepares</h3>
      <p className="text-gray-600">
        Your selected chef freshly prepares the meal using quality
        ingredients and authentic recipes.
      </p>
    </div>

    <div className="bg-base-100 shadow-lg rounded-xl p-6 text-center">
      <div className="text-5xl mb-4">🍽️</div>
      <h3 className="text-xl font-bold mb-2">Enjoy Your Meal</h3>
      <p className="text-gray-600">
        Receive your freshly prepared meal and enjoy a delicious homemade
        dining experience.
      </p>
    </div>

  </div>
</section>
        </div>
    );
};

export default HowItsWorks;