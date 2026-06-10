import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import MyMealsCard from './MyMealsCard';

const MyMeals = () => {

 const { user } = useAuth();
const axiosSecure = useAxiosSecure();

const { data: meals = [] } = useQuery({
  queryKey: ['meals', user?.email],
  queryFn: async () => {
    const res = await axiosSecure.get(`/my-meals/${user.email}`);
    return res.data;
  }
});

console.log(meals);




    return (
        <div>
            <h2 className='text-4xl text-center font-bold my-5'>My Meals: {meals.length}</h2>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {meals.map(meal => (
          <MyMealsCard
            key={meal._id}
            meal={meal}
          />
          
        ))}
      
      </div>
        </div>
    );
};

export default MyMeals;