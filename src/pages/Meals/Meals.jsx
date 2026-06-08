import React, { useEffect, useState } from 'react';
import MealsCard from './MealsCard';

const Meals = () => {

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('https://local-chef-bazaar-server-two.vercel.app/meals')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMeals(data);
      });
  }, []);



    return (
        <div>
            <h2 className="text-4xl text-center my-6 font-bold">Meals: {meals.length}</h2>


         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {meals.map(meal => (
          <MealsCard
            key={meal._id}
            meal={meal}
          />
          
        ))}
      
      </div>
        
        </div>
    );
};

export default Meals;