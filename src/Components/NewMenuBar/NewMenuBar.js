import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import "./NewMenuBar.css";
import { Link } from "react-router-dom";

const NewMenuBar = () => {
  const [activeNavbar, setActiveNavbar] = React.useState(false);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  React.useEffect(() => {
    const changeBackgroundColor = () => {
      if (window.scrollY >= 80) {
        setActiveNavbar(true);
      } else {
        setActiveNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackgroundColor);
  });

  const hideMobileNav = () => {
    setShowMobileNav(false);
  };

  return (
    <>
      <div className={activeNavbar ? "toolbar-new active" : "toolbar-new"}>
        <div className="inner-wrapper">
          <div className="logo">WALANCOGROUP</div>
          <ul>
            <li>
              <Link to="/realestate">Real Estate</Link>
            </li>
            <li>
              <Link to="/vehicles">Automobile</Link>
            </li>
            <li>
              <Link to="/oil-gas">Oil&Gas</Link>
            </li>
            <li>
              <Link to="/solar">Solar</Link>
            </li>
            <li>
              <Link to="/agriculture">Agriculture</Link>
            </li>
            <li>
              <Link to="/ict">ICT</Link>
            </li>
          </ul>
          <div
            className="nav-icon"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            <FaAlignJustify />
          </div>
        </div>
      </div>
      <div className={showMobileNav ? "mobile-nav active" : "mobile-nav"}>
        <ul>
          <li onClick={hideMobileNav}>
            <Link to="/realestate">Real Estate</Link>
          </li>
          <li onClick={hideMobileNav}>
            <Link to="/vehicles">Automobile</Link>
          </li>
          <li onClick={hideMobileNav}>
            <Link to="/oil-gas">Oil&Gas</Link>
          </li>
          <li onClick={hideMobileNav}>
            <Link to="/solar">Solar</Link>
          </li>
          <li onClick={hideMobileNav}>
            <Link to="/agriculture">Agriculture</Link>
          </li>
          <li onClick={hideMobileNav}>
            <Link to="/ict">ICT</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NewMenuBar;
