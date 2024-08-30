import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'; 
import Copyright from '../components/Copyright.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <ToastContainer/>
    <Copyright />
    </>
  )
}

export default MainLayout
