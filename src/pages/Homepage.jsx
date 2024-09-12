import React from 'react'
import '../css/home.css'
import image from '../assets/meh.jpeg'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
        <div className="con">
          <img src={image} className='img'/>
          <div className="div"></div>
          <h3 className='ite'>Item 1</h3>
          <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eaque rem totam, ex sit, assumenda adipisci dolorem quae veniam quibusdam corporis harum? Voluptas necessitatibus soluta voluptatum id repudiandae perferendis perspiciatis.</p>
          <button className='view'>View Product</button>
        </div>
        <div className="con2">
        <img src={image} className='img'/>
        <div className="div"></div>
        <h3 className='ite'>Item 2</h3>
        <p className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt iure hic praesentium tenetur, ex rerum voluptate iusto voluptatum nam, amet aperiam delectus laudantium deserunt, distinctio aliquam? Cumque sapiente fuga earum?</p>
        <button className='view'>View Product</button></div>
        <div className="con3">
          <img src={image} className='img'/>
          <div className="div"></div>
          <h3 className='ite'>Item 3</h3>
          <p className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex maxime impedit odit autem recusandae sequi minima dolores repudiandae velit corrupti et, praesentium ducimus, doloribus fuga! Sed aperiam recusandae enim temporibus.</p>
          <button className='view'>View Product</button></div>
        <button className='viewbtn'>View All Products</button>
      </div>
    </div>
    </>
  )
}

export default Homepage
