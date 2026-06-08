import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from './Reviews/Reviews';
import DailyMeals from '../DailyMeals/DailyMeals';



const reviewsPromise = fetch('https://local-chef-bazaar-server-two.vercel.app/reviews')
.then(res => res.json());
// console.log(reviewsPromise);

const mealsPromise = fetch('https://local-chef-bazaar-server-two.vercel.app/daily-meals')
.then(res => res.json());




const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Reviews reviewsPromise={reviewsPromise}></Reviews>
          <DailyMeals mealsPromise={mealsPromise}></DailyMeals>
        </div>
    );
};

export default Home;