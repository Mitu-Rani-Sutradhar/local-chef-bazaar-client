import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Comfort Kitchen?",
    answer:
      "Comfort Kitchen is a platform that connects food lovers with talented local chefs, allowing customers to discover and order fresh homemade meals.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Simply browse available meals, select your favorite dish, choose the quantity, and complete your order through the platform.",
  },
  {
    question: "Are the chefs verified?",
    answer:
      "Yes. We review chef profiles and information to help ensure a trusted and reliable experience for customers.",
  },
  {
    question: "Can I view ratings and reviews before ordering?",
    answer:
      "Absolutely. Customers can view ratings and reviews from previous buyers to help them make informed decisions.",
  },
  {
    question: "How can I become a chef on Comfort Kitchen?",
    answer:
      "Create an account, complete your chef profile, and submit the required information. Once approved, you can start listing meals for customers.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. We prioritize secure payment processing and protect customer information throughout the ordering process.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Faq = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="w-11/12 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            FAQ
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Frequently Asked Questions
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Find answers to the most common questions about ordering meals,
            becoming a chef, payments, and how Comfort Kitchen works.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="collapse collapse-plus bg-white border border-orange-100 rounded-2xl shadow-md hover:shadow-xl duration-300"
            >
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={index === 0}
              />

              <div className="collapse-title text-lg md:text-xl font-semibold">
                {faq.question}
              </div>

              <div className="collapse-content">
                <p className="text-gray-600 leading-7">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;