import React from 'react'
import logo from "../images/myntra_logo.webp"
import { IoPersonCircle } from "react-icons/io5";
import { GiHeartBeats } from "react-icons/gi";
import { IoBag } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <><header>
    <div className="logo_container">
        <NavLink to="/">
        <a href="#"><img className="myntra_home" src={logo} alt="Myntra Home"/></a></NavLink>
    </div>
    <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">Studio <sup>New</sup></a>
    </nav>
    <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input className="search_input" placeholder="Search for products, brands and more"/>
    </div>
    <div className="action_bar">
        <div className="action_container">
        <IoPersonCircle />
            <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
        <GiHeartBeats />
            <span className="action_name">Wishlist</span>
        </div>
       
       
        <NavLink 
  to="/bag" 
  style={{ color: 'inherit', textDecoration: 'none' }}
>
  <div className="action_container">
    <IoBag style={{ color: 'black' }} /> {/* Set icon color */}
    <span className="action_name">Bag</span>
    <span className="bag-item-count">0</span>
  </div>
</NavLink>

            
      
       
    </div>
</header></>
  )
}

export default Header