import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import{User2 } from 'lucide-react'

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when search is open
  useEffect(() => {
    document.body.style.overflow = showSearch ? 'hidden' : '';
  }, [showSearch]);

  return (
    <>
      <div className="navbar-main">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        <div className="logo">
          <Link to="/">SHOP.CO</Link>
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/shop">Shop</Link>
          <Link to="/sale">On Sale</Link>
          <Link to="/new">New Arrivals</Link>
          <Link to="/brands">Brands</Link>
        </div>

        <div className="nav-icons">
          <FaSearch onClick={() => setShowSearch(!showSearch)} className="icon" />
         <Link to='/cart' > <FaShoppingCart className="icon" /></Link>
          <div className="contact-icon">
         <Link to='/contect'><User2 className="icon contact-shirt" /></Link>
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="centered-search">
          <input type="text" placeholder="Search..." autoFocus />
        </div>
      )}
    </>
  );
};

export default Navbar;

