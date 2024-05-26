import React from 'react'
import Thumbnails from '../Components/Thumbnails';
import IconClose from '../images/icon-close.svg'

import leftArrow from '../images/icon-previous.svg'
import rightArrow from '../images/icon-next.svg'

function LightBox({slides, currentSlide, lightBoxPrevSlide, lightBoxNextSlide, handleClick, activeSlide, handleClose, closeLightBox}) {

  return (
    <>
    <div id= "lightbox" className="lightbox">
        <div className="lightbox-content">

       {slides.map((slide,index)=>{
    // console.log('data',slide)
    return(
        <div
        className={index === currentSlide ? 'lightbox-slide active' : 'slide'}  key={index}>
          <div className="lightbox-ctnt">
            <div className="close-caption">
              <img src={IconClose} alt="close lightbox" className='close-icon' onClick={handleClose} />
            </div>
            
          <div className="arrow-icons">
              <img src={leftArrow} onClick={lightBoxPrevSlide} className='lightbox-left-arrow' alt="" />
              <img src={rightArrow} onClick={lightBoxNextSlide} className='lightbox-right-arrow' alt=""  />
              </div>

            {index === currentSlide && (
                <img src={slide.image} alt=""   className="image lightbox-image" />)}
          </div>
          
        </div>
    )
  })}
      <div className="slides-thumbnails">
       <Thumbnails className="lightbox-thumbnails" handleClick={handleClick} activeSlide={activeSlide}/>
       </div>
    
        </div>
       
    </div>
    </>
  )
}

export default LightBox