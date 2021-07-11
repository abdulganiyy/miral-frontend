import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";

const Menubar = () => {
  return (
    <div
      className="menubar"
      style={{
        position: "fixed",
        backgroundColor: "transparent",
        top: "0",
        zIndex: "50",
        color: "black",
      }}
    >
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            MIRAL
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
          <a class="nav-link" href="#">
            Agriculture
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Solar Energy
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Information Technology
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menubar;
