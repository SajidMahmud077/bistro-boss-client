import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from '../Pages/Shared/Navbar'

const Main = () => {
  const location=useLocation();
  const noNavFooter= location.pathname.includes('login') || location.pathname.includes('signup')

  
  return (
    <div>
      {noNavFooter ||  <Navbar/> }
      <Outlet/>
      {noNavFooter || <Footer/>}
    </div>
  );
};

export default Main;