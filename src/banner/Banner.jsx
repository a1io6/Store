import React from 'react'
import './banner.css'
import banner from '../assets/banner.png'
import Carousel from 'react-bootstrap/Carousel';
function Banner() {
  return (
    <div className='banner'>
        <div className="banner-all">
            <div className='banner-logo'>
            <h2>Аксессуары для <br />Iphone 13 Pro Max</h2>
            </div>
            <div className='banner-img'><img src={banner} /></div>
           
        </div>
    
      
    </div>
  )
}

export default Banner    
