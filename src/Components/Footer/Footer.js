import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-item1">
        <div>
          <h3>WALANCO</h3>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
        </div>
        <div className="footer-item1-inner2">
          <h3>Categories</h3>
          <p>
            <Link to="/realestate">Real Estate</Link>
          </p>
          <p>
            <Link to="/vehicles">Automobile</Link>
          </p>
          <p>
            <Link to="/oil-gas">Oli&Gas</Link>
          </p>
          <p>
            <Link to="/solar">Solar</Link>
          </p>
          <p>
            <Link to="/agriculture">Agriculture</Link>
          </p>
          <p>
            <Link to="/ict">ICT</Link>
          </p>
        </div>
      </div>
      <div className="footer-item2">
        <div>Copyright © 2021 Walancogroup</div>
        <div className="footer-item2-inner2">
          <div>
            <i class="fab fa-instagram"></i>
          </div>
          <div>
            <i className="fab fa-facebook"></i>
          </div>
          <div>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
