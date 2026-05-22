import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';


const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosSecure = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
   useEffect(() => {
    // intercept request
    const reqInterceptor = axiosSecure.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user?.accessToken}`;
        return config;
    })

    //  interceptor response
    const resInterceptor = axiosSecure.interceptors.response.use(
        response => response,
        error => {

         const statusCode = error.status;
         if (statusCode === 401 || statusCode === 403){
            logOut()
            .then(() =>{
             navigate('/login')
            })
         } 

            return Promise.reject(error);
        }
    );

    return () => {
        // Eject the interceptor when the component unmounts
        axiosSecure.interceptors.request.eject(reqInterceptor);
        axiosSecure.interceptors.response.eject(resInterceptor);
    };


   }, [user, logOut, navigate])




    return axiosSecure;
};

export default useAxiosSecure;