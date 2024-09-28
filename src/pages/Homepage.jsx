import React from 'react'
import '../css/home.css'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import { useState, useEffect } from 'react'

const Homepage = () => {
  const navigate = useNavigate()
  const [img, setImg] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchImg = async() => {
    try{
    setLoading(true)
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()
    setImg(data)
  }
  catch(e) {
    console.log(e)
  }
  finally{
    setLoading(false)
  }
}

useEffect(() => {
  fetchImg()
}, [])

  return (
    <>
    <div className="container">
      <div className="top">
      <h1 className='title'>Welcome To MarketPlace</h1>
      <p className='tit'>Buy and sell products at unbelivable rates‼️‼️</p>
      </div>
      <div className="mid">
        <h2 className='mi'>Become A Marketer</h2>
        <h4 className='midd'>Sell your products on MarketPlace</h4>
        <button className='btn' onClick={() => {
          navigate('/add')
        }}>Add Products</button>
      </div>
      <div className="bottom">
        <h2 className='trend'>Trending Products</h2>

        {
          loading ? <p>Loading...</p> : (
            <main>
              <div>
                {img.slice(0,3).map((im)=>{
                  return(
                   <Card key={im.id} img={im} />)   
        })}
              </div>
            </main>
          )
        }    
        <button className='viewbtn' onClick={() => {
          navigate('/products')
        }}>View All Products</button>
      </div>
    </div>
    </>
  )
}

export default Homepage
