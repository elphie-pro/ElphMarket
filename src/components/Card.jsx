import React from 'react'
import image from '../assets/meh.jpeg'
import '../css/home.css'

function Card({img}) {
  return (
    <div className="con">
    <img src={img.url} className='img'/>
    <div className="div"></div>
    <h3 className='ite'>{img.thumbnailUrl}</h3>
    <p className='desc'>{img.title}</p>
    <button className='view'>View Product</button>
  </div>
  )
}

export default Card
