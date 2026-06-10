import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="py-16 bg-base-200 mb-5  rounded-lg">
  <div className="max-w-4xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
      <p className="mt-4 text-gray-500">
        Find answers to common questions about ordering meals, chefs, and
        using Local Chef Bazaar.
      </p>
    </div>

    <div className="space-y-4">

      <div className="collapse collapse-plus bg-base-100 shadow-md">
        <input type="radio" name="faq-accordion" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is Local Chef Bazaar?
        </div>
        <div className="collapse-content">
          <p>
            Local Chef Bazaar is a platform that connects food lovers with
            talented local chefs, allowing customers to discover and order
            fresh homemade meals.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 shadow-md">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          How do I place an order?
        </div>
        <div className="collapse-content">
          <p>
            Simply browse available meals, select your favorite dish, choose
            the quantity, and complete your order through the platform.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 shadow-md">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Are the chefs verified?
        </div>
        <div className="collapse-content">
          <p>
            Yes. We review chef profiles and information to help ensure a
            trusted and reliable experience for customers.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 shadow-md">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Can I view ratings and reviews before ordering?
        </div>
        <div className="collapse-content">
          <p>
            Absolutely. Customers can view ratings and reviews from previous
            buyers to help them make informed decisions.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 shadow-md">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          How can I become a chef on Local Chef Bazaar?
        </div>
        <div className="collapse-content">
          <p>
            Create an account, complete your chef profile, and submit the
            required information. Once approved, you can start listing meals
            for customers.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 shadow-md">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Is my payment information secure?
        </div>
        <div className="collapse-content">
          <p>
            Yes. We prioritize secure payment processing and protect customer
            information throughout the ordering process.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
        </div>
    );
};

export default Faq;
