
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import axios from 'axios';




const CreateMeal = () => {
    
      const { register,handleSubmit } =useForm();
   

      const {user} = useAuth();
      console.log(user);
      const axiosSecure = useAxiosSecure();

      
    const handleCreateOrder = (data) => {
        // console.log(data.foodImage[0]);
       const foodImg = data.foodImage[0];
      const formData = new FormData();
             formData.append('image', foodImg);
             
             const food_image_API_URL =`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_food_image}`
        //  axios.post(food_image_API_URL, formData)
    
               axios.post(food_image_API_URL, formData)
             .then(res => {
                const foodIamge = res.data.data.url;

            const foodInfo = {
                foodName: data.foodName,
                chefName: user.displayName,
                foodIamge: foodIamge,
                price: data.price,
                rating: data.rating,
                ingraedients: [
                    data.ingredients
                ],
                deliveryTime: data.deliveryTime,
                chefExperience: data.chefExperience,
                deliveryArea: data.deliveryArea,
                ChefEmail: user.email,
             
                
                
                
            }
                    axiosSecure.post('/meals', foodInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your meal has been created successfully.",
                                showConfirmButton: false,
                                timer: 2000
                            });
               }  })
        }) 
    }
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Create Meal</h2>
        
          <form className='pl-10' onSubmit={handleSubmit(handleCreateOrder)}>

          <fieldset className="fieldset">

             {/* food Name */}
             <label className="label">Food Name</label>
             <input type="text" className="input" name='foodName' {...register("foodName")}/>
    
         {/* price */}
         <label className="label">Chef Name</label>
             <input type="text" className="input" name='chefName' readOnly {...register("chefName")}   defaultValue={user?.displayName}/>
           
            
{/* food image */}
              <label className="label">Food Image</label>

                    <input type="file" name="foodImage" {...register('foodImage', { required: true })} className="file-input" placeholder="Food Image" />

         {/* price */}
          <label className="label">Price</label>
             <input type="number" className="input" name='price' {...register("price")} />


              {/* rating */}
              <label className="label">Rating</label>
             <input type="number" className="input" name='rating' {...register("rating")} />


              {/* ingredients */}
              <label className="label">Ingredients</label>
             <input type="text" className="input" name='ingredients' {...register("ingredients")} />

              {/* delivery Area*/}
              <label className="label">Delivery Area</label>
             <input type="text" className="input" name='deliveryArea' {...register("deliveryArea")} />

            


         {/* delivery time */}
    <label className="label">Estimated Delivery Time</label>
          <input type="text" className="input" name='DeliveryTime'{...register("deliveryTime")}   />


{/* chef experience */}
         <label className="label">Chef Experience (years)</label>
         <input type="number" className="input" name='chefExperience' {...register("chefExperience")} />



         {/* user email */}
         <label className="label">userEmail</label>
                                    <input type="email" className="input" name='userEmail' readOnly
                                    {...register("email")}
                                    defaultValue={user?.email}
                                     />


 
        
        </fieldset>

    
     <input
  type="submit"
  className="btn btn-primary my-5"
  
/>



         </form>
        </div>
    )
}

export default CreateMeal;