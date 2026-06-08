
import React from 'react';
import { Link, useLoaderData } from 'react-router';



const ViewDetails = () => {

const meal = useLoaderData();
console.log(meal)

      
    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-7'>The Meal Details</h2>

            <div className='lg:flex justify-around p-7 gap-3'>

                <div> <img className='h-[350px] w-[600px] pb-5' src={meal.
foodIamge} alt="" /></div>
              
               <div> <p><span className='font-bold text-lg'>Food-Name:</span> {meal.foodName}</p>
                <p><span className='font-bold text-lg pt-3'>Chef-Name:</span> {meal.chefName}</p>
                <p><span className='font-bold text-lg pt-3'>Food-Price:</span> {meal.price}</p>
                <p><span className='font-bold text-lg pt-3'>Rating:</span> {meal.rating}</p>
                <p><span className='font-bold text-lg pt-3'>Ingredients:</span>{meal.ingraedients
}</p>
                <p><span className='font-bold text-lg pt-3'>Delivery-Area:</span> {meal.deliveryArea}</p>
                <p><span className='font-bold text-lg pt-3'>Estimated-Delivery-Area:</span>{meal.             estimatedDeliveryTime}</p>
                <p><span className='font-bold text-lg pt-3'>Chef-Experience:</span> {meal.chefExperience}</p>
                <p><span className='font-bold text-lg pt-3'>ChefId:</span>{meal._id}</p>

                 <Link to={`/order/${meal._id}`}><button className='btn btn-primary mt-6 mb-5'>Order Now</button></Link>
                </div>

                 
       
            </div>
        
         
            
        </div>
    );
};

export default ViewDetails;