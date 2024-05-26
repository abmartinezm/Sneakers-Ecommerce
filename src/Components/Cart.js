import React from 'react'
import productImg from '../images/image-product-1-thumbnail.jpg'
import iconDelete from '../images/icon-delete.svg'
// import { useState } from 'react';

function Cart({empty,handleDelete,add,addItems,localNum,getBackgroundColor}) {

    


      
  return (

    
    <>
    <div className='cart-items-container'>


         <div className="cart-items">

         
        <div className="cart-header">
            <h1 className='cart-title'>Cart</h1>
           
        </div>
        {/* <hr/> */}
        <div className={localNum === 0 && addItems === false  ? "empty-cart show" :  'hide'}>
        
                <p className="empty">Your cart is empty.</p>
            </div>
   
        <div className=
        {localNum > 0  && addItems === true ? "cart-content show" : localNum > 0 || addItems === true ? "cart-content show" : 'hide' }
        // {localNum > 0 || addItems === true ? "cart-content show" : 'hide'}
        >
   
            
            <div className="item">
                <img className="product1" src={productImg} alt="" srcset="" />
            </div>
            <div className="item-quantity">
                <p className="item-desc"> Fall Limited Edition Sneakers <br /> $125.00  <span className="quantity">x{localNum}</span>  <output className="total-price">${ Math.round(125.00 * localNum).toFixed(2)  }</output> </p>
            </div>
            <div className="delete-div">
                <img className="icon-delete" src={iconDelete} alt="" srcset="" onClick={handleDelete} />
            </div>
            
           
        </div>
        <div className={localNum > 0  && addItems === true ? "checkout-div show" : localNum > 0 || addItems === true ? "checkout-div show" : 'hide'}>
        
            <button className='btn-cart' type="submit">Checkout</button>
           </div>
           </div>
    </div>
    </>
  )
}

export default Cart