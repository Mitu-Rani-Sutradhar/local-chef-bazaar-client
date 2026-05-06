import React from 'react';

const Footer = () => {
    return (
         <footer className="bg-gray-900 text-white py-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Contact Details */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>Email: support@localchefbazaar.com</p>
          <p>Phone: +880100000000</p>
          <p>Address: Bangladesh</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://x.com/">Twitter</a>
            <a href="https://www.linkedin.com/">LinkedIn</a>
          </div>
        </div>

        {/* Working Hours */}
        <div>
          <h2 className="text-xl font-bold mb-4">Working Hours</h2>
          <p>Mon - Fri: 9AM - 6PM</p>
          <p>Saturday: 10AM - 4PM</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Copyright */}
        <div>
          <h2 className="text-xl font-bold mb-4">About</h2>
          <p>© {new Date().getFullYear()}  Your Company</p>
          <p>All rights reserved.</p>
        </div>

      </div>
    </footer>
    );
};

export default Footer;