import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";

const Menubar = () => {
  return (
    <div className="menubar">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Walanco
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/realestate">
            RealEstate
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/vehicles">
            Automobile
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/oil-gas">
            Oil
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/agriculture">
            Agriculture
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/solar">
            Solar Energy
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/ict">
            Information Technology
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menubar;
