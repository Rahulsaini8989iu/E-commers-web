import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { SiVisa, SiPaypal, SiApplepay, SiGooglepay } from "react-icons/si";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="newsletter">
        <h2>STAY UPTO DATE ABOUT<br />OUR LATEST OFFERS</h2>
        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe to Newsletter</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section company-info">
          <h1>SHOP.CO</h1>
          <p>
            We have clothes that suit your style<br />
            and which you're proud to wear.<br />
            From women to men.
          </p>
          <div className="social-icons">
            <FaInstagram />
            <FaTwitter />
            <FaFacebookF />
          </div>
        </div>

        <div className="footer-section">
          <h2>Company</h2>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Help</h2>
          <ul>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>FAQ</h2>
          <ul>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Resources</h2>
          <ul>
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Shop.co © 2000-2025, All Rights Reserved</p>
        <div className="payment-icons">
          <SiVisa />
          <SiPaypal />
          <SiApplepay />
          <SiGooglepay />
        </div>
      </div>
    </footer>
  );
}

export default Footer;