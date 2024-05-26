import React from 'react'
import iconMinus from '../images/icon-minus.svg'
import iconPlus from '../images/icon-plus.svg'
import iconCart from '../images/icon-cart-white.svg'

function PriceBasket({handleMinus, handlePlus, count, addToCart}) {
  return (
    // <>
    <div className="content-div">
      <div className="info-container">
      <div className="header-info">
        <h1 className="title">SNEAKERS COMPANY</h1>
        <h2 className="subtitle">Fall Limited Edition Sneakers</h2>
      </div>
      <div className="info-desc">
        <p className="info">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
    </div>

    <div className="price-container" >
      <div className="price-reduced">
        <p className="price">$125.00</p>
        <label className='sale-price' htmlFor="price">50%</label>
      </div>
      <div className="original-price">
      <p className="discount"><s>$250.00</s></p> 
      </div>
    </div>

    <div className="cart-container">
      <div className="amount">
        <img onClick={handleMinus}  className="icon-minus" src={iconMinus} alt="" srcset="" />

      <output className='number-input' name="x" for="">{count}</output>
      <img onClick={handlePlus} className="icon-plus" src={iconPlus} alt="" srcset="" />
      </div>
      <div className="button-cart">
        <button className='btn-cart' onClick={addToCart}  type="submit"> <img className='cart-icon' src={iconCart} alt="" srcset="" /> Add to cart </button>
      </div>
    </div>
    </div>
    
    // </>
    
  )
}

export default PriceBasket