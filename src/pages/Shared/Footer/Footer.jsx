import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUtensils,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white">
      <div className="w-11/12 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white text-orange-500 p-3 rounded-full">
                <FaUtensils size={24} />
              </div>

              <h2 className="text-2xl font-bold">
                Comfort Kitchen
              </h2>
            </div>

            <p className="text-orange-100 leading-7">
              Discover delicious homemade meals prepared by talented local
              chefs. We connect food lovers with authentic flavors while
              supporting local communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-5">
              Quick Links
            </h2>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-200 duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/allFoods"
                  className="hover:text-yellow-200 duration-300"
                >
                  All Foods
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="hover:text-yellow-200 duration-300"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-200 duration-300"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-5">
              Contact Us
            </h2>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>support@comfortkitchen.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+880 1000-000000</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>Dhaka, Bangladesh</span>
              </div>

            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h2 className="text-xl font-bold mb-5">
              Working Hours
            </h2>

            <div className="space-y-3">

              <div className="flex items-center gap-3">
                <FaClock />
                <span>Mon - Fri : 9:00 AM - 6:00 PM</span>
              </div>

              <div className="flex items-center gap-3">
                <FaClock />
                <span>Saturday : 10:00 AM - 4:00 PM</span>
              </div>

              <div className="flex items-center gap-3">
                <FaClock />
                <span>Sunday : Closed</span>
              </div>

            </div>

            {/* Social */}
            <div className="flex gap-4 mt-8">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-orange-500 p-3 rounded-full hover:bg-yellow-300 hover:scale-110 duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-orange-500 p-3 rounded-full hover:bg-yellow-300 hover:scale-110 duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-orange-500 p-3 rounded-full hover:bg-yellow-300 hover:scale-110 duration-300"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-orange-300 mt-12 pt-6 text-center text-orange-100">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              Comfort Kitchen
            </span>{" "}
            | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;