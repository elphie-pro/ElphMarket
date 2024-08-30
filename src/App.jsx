import { useState } from 'react'
import MainLayout from './Layouts/MainLayout'
import Homepage from './pages/Homepage'
import Addproject from './Addproject'
import { Route, createRoutesFromElements, RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>} >
      <Route index element={<Homepage/>}/> 
      <Route path='/add' element={<Addproject/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router = {router} /> 
  )
}

export default App
