import { useState } from 'react'
import MainLayout from './Layouts/MainLayout'
import Homepage from './pages/Homepage'
import { Route, createRoutesFromElements, RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>} >
      <Route index element={<Homepage/>}/> 

      </Route>
    )
  )

  return (
    <RouterProvider router = {router} /> 
  )
}

export default App
