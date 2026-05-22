import React from 'react';
import useRole from '../hooks/useRole';


const AdminRoute = ({children}) => {
  const {role, loading} = useRole();
 if(loading){
    return <div className='text-center text-3xl font-bold text-green-500'>Loading...</div>;
  }
  if (role.role !== 'admin') {
    return <div className='text-center text-3xl font-bold text-red-500'>You are not authorized to access this page.</div>;
  }
    return children;
};

export default AdminRoute;