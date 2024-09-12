import { useState } from 'react'
import MainLayout from './Layouts/MainLayout'
import Homepage from './pages/Homepage'
import Addproduct from './Addproduct'
import Productspage from './pages/Productspage'
import { Route, createRoutesFromElements, RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>} >
      <Route index element={<Homepage/>}/> 
      <Route path='/add' element={<Addproduct/>} />
      <Route path='/products' element={<Productspage/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router = {router} /> 
  )
}

export default App
