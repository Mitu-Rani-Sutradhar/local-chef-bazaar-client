import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from './Reviews/Reviews';



const reviewsPromise = fetch('http://localhost:3000/reviews')
.then(res => res.json());
// console.log(reviewsPromise);




const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;