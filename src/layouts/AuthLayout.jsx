import React from 'react';
import Login from '../pages/Auth/Login/Login';
import Registration from '../pages/Auth/Registration/Register';
import Register from '../pages/Auth/Registration/Register';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;