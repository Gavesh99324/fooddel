import React, { useState } from 'react'
import './NavBar.css'
import logo from './logo.png'
import searchIcon from './search_icon.png'
import basketIcon from './basket_icon.png'

const NavBar = () => {

  const [menu, SetMenu] = useState("Home")


  return (
    <div className='navBar'>
      <img src={logo} alt='logo' className='logo' />
      <ul className='navbar-menu'>
        <li onClick={() => SetMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
        <li onClick={() => SetMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
        <li onClick={() => SetMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</li>
        <li onClick={() => SetMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</li>
      </ul>
      <div className='navbar-right'>
        <img src={searchIcon} alt="search icon" />
        <div className='navbar-search-icon'>
            <img src={basketIcon} alt="basket icon" />
            <div className='dot'></div>
        </div>
        <button className='navbar-button'>sign in</button>
      </div>
    </div>
  )
}

export default NavBar
