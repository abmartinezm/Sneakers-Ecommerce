import React from 'react'
import { SliderData } from './SliderData'
// import { useState } from 'react';
import leftArrow from '../images/icon-previous.svg'
import rightArrow from '../images/icon-next.svg'
// import Product1 from '../images/image-product-1.jpg'


function Slider({slides,handleLightboxClick, prevSlide, nextSlide, current, width, breakpoint}) {


  if(!Array.isArray(slides)||slides.length <=0){
    return null;
  } 


  return (
    <div className='slider-container'>

     
      {/* {openCart && <Cart count={count} empty={empty} handleDelete={handleDelete}/>  }
      {openCart ? (<div className="overlay" onClick={() => setOpenCart(false)} />) : null} */}
        

      <img src={leftArrow} onClick={prevSlide} className='left-arrow' alt=""  />
      <img src={rightArrow} onClick={nextSlide} className='right-arrow' alt=""  />

      {SliderData.map((slide,index)=>{
        // console.log('data',slide)
        console.log('data',slide.image[0])
        return(
            <div
            className={index === current ? 'slide active' : 'slide'}  onClick={width < breakpoint ? () => {} :  handleLightboxClick } key={index}>
     
                {index === current && (
                    <img src={width < breakpoint ? slide.image : slide.image} alt=""  className="image" />
      
                    )}
              
            </div>
        )
      })}
    </div>
  )
}

export default Slider
