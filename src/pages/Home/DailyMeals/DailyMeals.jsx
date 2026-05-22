import React, { use } from 'react';
import DailyMealCard from './DailyMealCard';

const DailyMeals = ({mealsPromise}) => {
     const meals = use(mealsPromise);
        console.log(meals);
    return (
          <div>
            <h2 className="text-4xl text-center my-15 font-bold">Daily Meals</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
        {meals.map(meal => (
          <DailyMealCard
            key={meal._id}
            meal={meal}
          />
        ))}
      </div>
          </div>
    );
};

export default DailyMeals;