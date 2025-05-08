import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="header-section">
          <div className="text-section">
            <p>Sign up and get 20% off to your first order. <Link to='/contect'><span>Sign Up Now</span></Link></p>
          </div>
          <div className="crros-section" onClick={handleClose}>
            x
          </div>
        </div>
      )}
    </>
  );
};

export default Header