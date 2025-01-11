import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Allusers from '../Pages/Dashboard/Allusers/Allusers'
import AddItems from '../Pages/Dashboard/AddItems/AddItems'
import AdminRoute from './AdminRoute'
import ManageItems from '../Pages/Dashboard/ManageItems/ManageItems'
import UpdateItem from '../Pages/Dashboard/UpdateItem/UpdateItem'
import Payment from '../Pages/Dashboard/Payment/Payment'
import PaymentHistory from '../Pages/Dashboard/PaymentHistory/PaymentHistory'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // normal user route
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: 'payment',
        element: <Payment/>
      },
      {
        path:'paymentHistory',
        element: <PaymentHistory/>

      },

      // admin route
      {
        path:'additems',
        element:<AdminRoute><AddItems/></AdminRoute>

      },
      {
        path: 'manageitems',
        element: <AdminRoute><ManageItems/></AdminRoute>
      },
      {
        path: 'updateitem/:id',
        element: <AdminRoute><UpdateItem/></AdminRoute>,
        loader: ({params})=> fetch(`http://localhost:4000/menu/${params.id}`)

      },
      {
        path:'users',
        element: <AdminRoute><Allusers/></AdminRoute>
      }
    ],
  },
]);
