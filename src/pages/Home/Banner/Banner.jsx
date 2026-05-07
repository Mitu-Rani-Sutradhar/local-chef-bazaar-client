
import React from 'react';
import food1Img from '../../../assets/food-1.png'
import food2Img from '../../../assets/food-2.png'

import { Link } from 'react-router';
// import { motion } from "framer-motion";

const Banner = () => {
    return (

    // <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content flex-col lg:flex-row-reverse">

    //     {/* Image Animation */}
    //     <motion.img
    //       src="https://i.ibb.co.com/example-image.png"
    //       className="max-w-sm rounded-lg shadow-2xl"
          
    //       initial={{ opacity: 0, x: 100 }}
    //       animate={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 1 }}
    //     />

    //     {/* Text Animation */}
    //     <div>
    //       <motion.h1
    //         className="text-5xl font-bold"
            
    //         initial={{ opacity: 0, y: -50 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 1 }}
    //       >
    //         Fresh Food Delivered
    //       </motion.h1>

    //       <motion.p
    //         className="py-6"
            
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ delay: 0.5, duration: 1 }}
    //       >
    //         Order fresh local food from trusted chefs near you.
    //       </motion.p>

    //       <motion.button
    //         className="btn btn-primary"

    //         whileHover={{ scale: 1.1 }}
    //         whileTap={{ scale: 0.9 }}
    //       >
    //         Get Started
    //       </motion.button>
    //     </div>
    //   </div>
    // </div>

    <div className='flex p-4 items-center justify-between'>
        <div className='text-center'>
           
              <h2 className='text-4xl font-bold'>Baked to delight served with <span className='text-orange-300'>LOVE</span></h2>
              <p className='text-lg'>Choose one that suits your taste and your budget.</p>
             <Link to='/meals'> <button className='btn btn-primary p-4 m-4'>Order now</button></Link>
        </div>
        <div className='m-5 relative'>
            <img className="w-100 rounded-xl" src={food1Img} alt="" />
            <img className='absolute w-30 lg:w-60 top-25 -left-35 rounded-xl border-6 border-white' src={food2Img} alt="" />
        </div>
    </div>
    )
}


export default Banner;