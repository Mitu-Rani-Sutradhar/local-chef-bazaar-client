import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Auth/Registration/Register";
import Login from "../pages/Auth/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Meals from "../pages/Meals/Meals";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Order from "../pages/Order/Order";
import DashboardLayout from "../layouts/DashboardLayout";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";
import Profile from "../pages/Dashboard/Profile/Profile";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ManageRequest from "../pages/Dashboard/ManageRequest/ManageRequest";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import CreateMeal from "../pages/Dashboard/CreateMeal/CreateMeal";
import OrderRequests from "../pages/Dashboard/OrderRequests/OrderRequests";
import MyMeals from "../pages/Dashboard/MyMeals/MyMeals";





export const router = createBrowserRouter([
  
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'meals',
        element: <Meals></Meals>
      },
      {
        path: 'meals/:id',
        loader: ({params}) => fetch(`https://local-chef-bazaar-server-two.vercel.app/meals/${params.id}`),
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          
      },
      {
        path:'order/:id',
        element:<PrivateRoute><Order></Order></PrivateRoute>
      }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      }
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path:'my-orders',
        Component:MyOrders
      },
      {
         path: 'profile',
         Component: Profile
      },
      {
        path: 'payment/:orderId',
        Component: Payment
      },
      {
        path: 'payment-history',
        Component: PaymentHistory
      },
      {
        path: 'create-meal',
        Component: CreateMeal
      },
      {
        path: 'my-meals',
        Component: MyMeals
      },
      {
        path: 'order-requests',
        Component: OrderRequests
      },
      {
        path: 'payment-success',
        Component: PaymentSuccess
      },
      {
        path: 'payment-cancelled',
        Component: PaymentCancelled
      },
      {
        path: 'manage-request',
        // Component: ManageRequest
        element: <AdminRoute><ManageRequest></ManageRequest></AdminRoute>
      },
      {
        path: 'manage-users',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      }
    ]
  }
]);
