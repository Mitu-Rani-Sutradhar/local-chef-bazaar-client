import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyMeals = () => {

 const { user } = useAuth();
const axiosSecure = useAxiosSecure();

const { data: meals = [] } = useQuery({
  queryKey: ['meals', user?.email],
  enabled: !!user?.email,
  queryFn: async () => {
    const res = await axiosSecure.get(`/meals?email=${user.email}`);
    return res.data;
  }
});

console.log(meals);


    return (
        <div>
            <h2 className='text-4xl text-center font-bold my-5'>My Meals: {meals.length}</h2>
        
       
        </div>
    );
};

export default MyMeals;