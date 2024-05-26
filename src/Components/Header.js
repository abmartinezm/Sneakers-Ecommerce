import React from 'react'
import iconHamburger  from '../images/icon-menu.svg'
import logo from '../images/logo.svg'
import iconCart from '../images/icon-cart.svg'
import iconProfilePic from '../images/image-avatar.png'
import Cart from '../Components/Cart';

function Header({handleMenu, open,setOpen,handleCart, empty, openCart,setOpenCart, count,handleDelete,add,addItems,localNum, getBackgroundColor }) {
  return (
    <div className="header-container">

       {openCart && <Cart count={count} empty={empty} handleDelete={handleDelete} add={add}   addItems={addItems} localNum={localNum} getBackgroundColor={getBackgroundColor}/>  }
      {openCart ? (<div className="overlay" onClick={() => setOpenCart(false)} />) : null}

      <div className="ctnt-wrap">
      <div className="header-content">
      {open ? (<div className="overlay" onClick={() => setOpen(false)} />) : null}
        <div className="logo">
            <img src={iconHamburger}  onClick={handleMenu} className={open === false ? 'icon-ham show' : 'icon-ham closed'} alt="" srcset="" />
            <img src={logo} className='icon-logo'   alt="" srcset="" />
        </div>
        <div className="buyer">
        <div className="cart-items-head">
        <img src={iconCart} onClick={handleCart}   className='icon-cart' alt="" srcset="" />
        <span className='items-quantity'>{ add }</span>
        </div>
        <img src={iconProfilePic} className='icon-pic ' alt="" srcset="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header
