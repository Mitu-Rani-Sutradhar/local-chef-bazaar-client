import React from "react";
import { Link } from "react-router";

const MealsCard = ({ meal }) => {
  const {
    _id,
    foodName,
    rating,
    foodIamge, // যদি database-এ foodIamge থাকে তাহলে এটাকে foodIamge রাখবে
    price,
    deliveryArea,
  } = meal;

  return (
    <div className="card w-full h-full bg-base-100 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <figure className="h-56 overflow-hidden">
        <img
          src={foodIamge}
          alt={foodName}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-xl">{foodName}</h2>

        <p>
          <span className="font-semibold">⭐ Rating:</span> {rating}
        </p>

        <p>
          <span className="font-semibold">💰 Price:</span> ${price}
        </p>

        <p>
          <span className="font-semibold">📍 Delivery:</span> {deliveryArea}
        </p>

        <div className="card-actions justify-center mt-4">
          <Link to={`/meals/${_id}`}>
            <button className="btn btn-primary rounded-full px-6">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealsCard;