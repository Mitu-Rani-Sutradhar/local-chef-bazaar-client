import React from "react";
import { Link } from "react-router";


const DailyMealCard = ({ meal }) => {

  const {
    _id,
    rating,
    foodIamge,
    chefName,
    price,
    deliveryArea
  } = meal;


  return (

    <div
      className="
      bg-white
      rounded-3xl
      shadow-md
      border
      border-orange-100
      overflow-hidden
      h-full
      flex
      flex-col
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >


      {/* Food Image */}

      <div
        className="
        w-full
        h-52
        overflow-hidden
        "
      >

        <img
          src={foodIamge}
          alt="food"
          className="
          w-full
          h-full
          object-cover
          hover:scale-110
          transition
          duration-500
          "
        />

      </div>




      {/* Card Content */}

      <div
        className="
        p-5
        flex
        flex-col
        flex-grow
        "
      >


        <h2
          className="
          text-xl
          font-bold
          text-gray-800
          mb-4
          "
        >
          {chefName}
        </h2>



        <div
          className="
          space-y-3
          text-gray-600
          "
        >

          <p>
            <span className="font-semibold text-gray-800">
              Chef Name:
            </span>
            {" "}
            {chefName}
          </p>


          <p>
            <span className="font-semibold text-gray-800">
              Delivery Area:
            </span>
            {" "}
            {deliveryArea}
          </p>



          <div
            className="
            flex
            justify-between
            items-center
            "
          >

            <p>
              <span className="font-semibold text-gray-800">
                Price:
              </span>

              <span
                className="
                ml-2
                bg-yellow-300
                text-black
                px-3
                py-1
                rounded-full
                "
              >
                {price}
              </span>

            </p>



            <p>

              <span className="font-semibold text-gray-800">
                Rating:
              </span>

              ⭐ {rating}

            </p>


          </div>


        </div>





        {/* Button Bottom */}

        <div
          className="
          mt-auto
          pt-6
          "
        >

          <Link
            to={`/meals/${_id}`}
          >

            <button
              className="
              w-full
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-semibold
              py-2.5
              rounded-full
              transition
              "
            >

              See Details

            </button>

          </Link>


        </div>



      </div>


    </div>

  );
};


export default DailyMealCard;