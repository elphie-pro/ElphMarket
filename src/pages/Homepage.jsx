import React from 'react'
import '../css/home.css'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate()

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
        <div className="grid">
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Homepage
