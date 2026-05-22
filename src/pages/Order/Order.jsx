import React, { use, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';



const Order = () => {
    
   const { user } = use(AuthContext);
   const { id } = useParams();  
   const navigate = useNavigate();

   const [meals, setMeals] = useState({});
//    console.log(meals);


 
   useEffect(() => {
     fetch(`http://localhost:3000/meals/${id}`)
       .then(res => res.json())
       .then(data => {
         console.log(data);
         setMeals(data);
       });
   }, [id]);
 
    const {  handleSubmit, register, reset } =useForm();
    useEffect(() => {
  if (meals) {
    reset({
      foodName: meals.foodName,
      chefId: meals._id,
      email:user.email,
      orderStatus: "pending",
      price: meals.price
      
    
    });
  }
}, [meals, reset]);

const axiosSecure = useAxiosSecure();





// for fraud
const { data: userInfo = {}, isLoading } = useQuery({
  queryKey: ['user-info', user?.email],
  enabled: !!user?.email,
  queryFn: async () => {
    const res = await axiosSecure.get(`/users/${user.email}`);
    return res.data;
  }
});

    
    const handleSendOrder = data => {
     console.log(data);



    //  for fraud
    if (userInfo?.role === 'user' && userInfo?.status === 'fraud') {
    Swal.fire({
      icon: 'error',
      title: 'Access Denied',
      text: 'Fraud users are not allowed to place orders.'
    });
    return;
  }




        const mealPrice = data.price;
        // console.log(mealPrice);

        const quantity = data.quantity;

        let totalPrice = 0;

        if(quantity === 1){
            totalPrice = mealPrice || 0;
        }
        else{
            totalPrice = (mealPrice || 0) *quantity
        }
        

  Swal.fire({
  title: "Please Confirm the Price!",
  text: `You will be charged! ${totalPrice} TK`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "I am ready to pay!"
})

.then((result) => {
  if (result.isConfirmed) {
// save the order info server

const orderData = {
  ...data,foodId:meals._id,chefName:meals.chefName
};
    axiosSecure.post('/orders', orderData )
    .then(res =>{
        console.log('after saving parcel', res.data);
        if(res.data.insertedId){
          navigate('/dashboard/my-orders')
           Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your order has been created. Please proceed to payment.",
  showConfirmButton: false,
  timer: 2500
});
        }
    })

 
  }
});
      
    
    }
    
    
    return (
        <div>
            <h2 className="text-4xl font-bold text-center py-6">Order this Food</h2>
         <form onSubmit={handleSubmit(handleSendOrder)}>

          <fieldset className="fieldset">

             {/* mealName */}
             <label className="label">mealName</label>
             <input type="text" className="input" name='foodName' {...register("foodName")} readOnly/>
    
         {/* price */}
         <label className="label">price</label>
             <input type="number" className="input" name='price'
              {...register("price")}
              value={meals?.price || ''}
               />

             {/* Quantity */}
         <label className="label">quantity</label>
             <input type="number" className="input" 
              min="1"
            
             name='quantity'
             {...register("quantity")}
            //  onChange={handleQuantityChange}
              />

         {/* cgefId */}
          <label className="label">chefId</label>
             <input type="text" className="input" name='chefId'
             {...register("chefId")} 
             readOnly 
            //  value={meals?.chefId || ''}
              />


         {/* user email */}
         <label className="label">userEmail</label>
                                    <input type="email" className="input" name='userEmail' readOnly
                                    {...register("email")}
                                    // defaultValue={user?.email}
                                     />


        {/* user address */}
       <label className="label">userAddress</label>
          <input type="text" {...register("userAddress")}
          className="input" placeholder='userAddress'
        //  name='address' required 
          />


        {/* order status */}
            {/* <label className="label">orderStatus</label>
          <input type="text" className="input" name='orderStatus' 
        //   {...register("pending")}
           defaultValue='pending' 
           required /> */}

          {/* orderTime */}
    <label className="label">orderTime</label>
          <input type="text" className="input" name='orderTime' readOnly value={new Date().toLocaleString()} {...register("orderTime")}  />

        
        </fieldset>

        {/* <input type="submit" className='btn btn-primary my-5' value="Confirm Order" /> */}

     {/* for fraud */}
     <input
  type="submit"
  className="btn btn-primary my-5"
  value={
    userInfo?.role === 'user' && userInfo?.status === 'fraud'
      ? 'Fraud Users Cannot Order'
      : 'Confirm Order'
  }
  disabled={
    isLoading ||
    (userInfo?.role === 'user' && userInfo?.status === 'fraud')
  }
/>



         </form>
        </div>
    );
};

export default Order;