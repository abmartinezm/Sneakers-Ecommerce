import React from 'react';
import iconClose from '../images/icon-close.svg';
import {BrowserRouter as Router , NavLink} from 'react-router-dom'

function MobileMenu({handleMenu, open}) {
  return (
    <>

    
    <div className={open === true ? 'mbl-menu-container show' : 'mbl-menu-container closed'}>
      <div className="close-menu">
        <img className='icon-close' onClick={handleMenu} src={iconClose} alt="" />
      </div>
      <div className="ol-list">
        <Router className="selections">
            <NavLink className='option' to='/collections' >Collections </NavLink>
            <NavLink className='option' to='/men'>Men</NavLink>
            <NavLink className='option' to='/women'>Women</NavLink>
            <NavLink className='option' to='/about'>About</NavLink>
            <NavLink className='option' to='/contact'>Contact</NavLink>

        </Router>
      </div>
    </div>
    </>
  )
}

export default MobileMenu
