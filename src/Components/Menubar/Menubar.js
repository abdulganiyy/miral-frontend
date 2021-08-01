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
          <a class="nav-link" href="/vehicles">
            Automobile
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/oil-gas">
            Oil
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/agriculture">
            Agriculture
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/solar">
            Solar Energy
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/ict">
            Information Technology
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menubar;
