import React from "react";
import Slider from "../../Components/Slider/Slider";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";

import huffpost from "../../images/huffpost.svg";
import bbc from "../../images/bbc.svg";
import bloom from "../../images/bloom.svg";
import insider from "../../images/insider.svg";
import times from "../../images/times.svg";
import cnbc from "../../images/cnbc.svg";
import workgroup from "../../images/workgroup.jpg";

const categories = [
  {
    name: "OIL AND GAS",
    img: "https://img.jamesedition.com/listing_images/2018/04/04/05/32/53/fdfd2894-c789-40d2-a258-280fe950aa2a/je/2000xxs.jpg",
  },
  {
    name: "AGRICULTURE",
    img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "AUTOMOTIVE",
    img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "REAL ESTATE",
    img: "https://images.unsplash.com/photo-1599393292508-483954a8183e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=899&q=80",
  },
  {
    name: "SOLAR ENERGY",
    img: "https://images.unsplash.com/photo-1574170623305-76d87a78cfcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "INFORMATION TECHNOLOGY",
    img: "https://images.unsplash.com/photo-1615820346289-9581ad2a8bf7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
  },
];

function Home() {
  return (
    <div className="home">
      <Slider contents={categories} />
      <div className="home-about">
        <h4>WELCOME TO WALANCO GROUP</h4>
        <p className="short-desc">
          Walanco Group is a general consultant and brokerage company that offer
          a broad portfolio of powerful trusted innovative formats that continue
          to capture the imagination of the company and industries worldwide
        </p>
        <p className="findout">
          <span>FIND OUT MORE</span>
        </p>
      </div>
      <div className="heading">
        <h2>Featured Categories</h2>
      </div>
      <div className="categories">
        <div className="category">
          <img
            alt="cat"
            src="https://images.unsplash.com/photo-1599749883160-7a1d4d27792e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
          />
          <div>
            <p>
              <p>Real Estate</p>
              <p style={{ margin: "0px" }}>123,600 LIstings</p>
            </p>
            <Link to="/realestate">
              <i class="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>

        <div className="category">
          <img
            alt="cat"
            src="https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80"
          />
          <div>
            <p>
              <p>Automobile</p>
              <p style={{ margin: "0px" }}>123,600 LIstings</p>
            </p>
            <Link to="/vehicles">
              <i class="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
        <div className="category">
          <img
            alt="cat"
            src="https://images.unsplash.com/photo-1550968378-2b662fc67c26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80"
          />
          <div>
            <p>
              <p>Agriculture</p>
              <p style={{ margin: "0px" }}>123,600 LIstings</p>
            </p>
            <Link to="/agriculture">
              <i class="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
        <div className="category">
          <img
            alt="cat"
            src="https://images.unsplash.com/photo-1538984463577-feb129172d3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=366&q=80"
          />
          <div>
            <p>
              <p>Solar Energy</p>
              <p style={{ margin: "0px" }}>123,600 LIstings</p>
            </p>
            <Link to="/solar">
              <i class="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
        <div className="category">
          <img
            alt="cat"
            src="https://images.unsplash.com/photo-1516849677043-ef67c9557e16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
          <div>
            <p>
              <p>Information Technology</p>
              <p style={{ margin: "0px" }}>123,600 LIstings</p>
            </p>
            <Link to="/ict">
              <i class="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="partners">
        <h3>PARTNERS</h3>
        <div>
          <img alt="img" src={huffpost} />
          <img alt="img" src={bbc} />
          <img alt="img" src={cnbc} />
          <img alt="img" src={insider} />
          <img alt="img" src={times} />
          <img alt="img" src={bloom} />
        </div>
      </div>
      <div className="home__second-about">
        <div className="home__second-about__img-box">
          <img
            src={workgroup}
            alt="about_img"
            className="home__second-about__img-box__img"
          />
        </div>
        <div className="home__second-about__text-box">
          <h2 className="home__second-about__text-box__heading">ABOUT US</h2>
          <div className="home__second-about__text-box__main">
            <h3 className="home__second-about__text-box__main__heading">
              Passionate Marketing Experts
            </h3>
            <p>
              We have successful businesses create their brand presence and
              achieve their goals. Our process is the plan to certify your
              organization's company and outfit your business with the marketing
              tools needed to succeed. Talk to us today about how we can support
              your growth, limit your turnover, and put you on a solid track to
              success and profit.
            </p>
          </div>
          <div className="home__second-about__text-box__main">
            <h3>Our Analytical Approach</h3>
            <p>
              Our service includes a comprehensive consult to help identify gaps
              and opportunities, and results in a comprehensive report that
              includes a project plan with timelines a cost analysis. Our
              individualized plans are made up of quality services that will
              help you get there quickly and smoothly.
            </p>
          </div>
          <div>
            <h3>Industry Wide Success</h3>
            <p>
              We work with a large number of clients from various industries,
              including:
            </p>
            <ul>
              <li>Oil & Gas</li>
              <li>Agriculture</li>
              <li>Automotive</li>
              <li>Construction</li>
              <li>Information Technology</li>
              <li>Real Estate</li>
              <li>Travel & Tourism</li>
            </ul>
            <p>
              Our marketing experts are ready assist you in developing a
              marketing plan that drives your business.
            </p>
          </div>
        </div>
      </div>
      <div className="home__second-contact">
        <h3 className="home__second-contact__heading">CONTACT US</h3>
        <div className="home__second-contact__content">
          <div className="home__second-contact__content__form">
            <h4>Drop Us A line</h4>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">SEND</button>
            </form>
          </div>
          <div className="home__second-contact__content__details">
            <div>
              <h4>Better yet, see us in person!</h4>
              <p>
                We love to work with you, so feel free to contact us anytime.
              </p>
            </div>
            <div>
              <h4>WALANCO GROUP</h4>
              <p>
                WALANCO GROUP PO BOX 322 SHEIK MOHAMMED BIN RASHID BLIVD-
                DOWNTOWN, DUBAI, UNITED ARAB EMIRATES
              </p>
              <p>
                contact us @walancogroup@gmail.com & walancogroup@yahoomail.com
              </p>
            </div>
            <div>
              <h3>Open 24hours</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="address-wrapper">
        <h3>ADDRESS</h3>
        <div className="address">
          <div>
            <h4>UNITED ARAB EMIRATE</h4>
            <ul>
              <li>WALANCO GROUP</li>
              <li>PO BOX 322</li>
              <li>SHEIK MOHAMMED BIN RASHID BLIVD- DOWNTOWN </li>
              <li>DUBAI, UNITED ARAB EMIRATES</li>
              <li>MOBILE NUMBER: +971528137250</li>
              <li>EMAIL: walancogroup@gmail.com </li>
            </ul>
          </div>
          <div>
            <h4>UNITED STATE</h4>
            <ul>
              <li>WALANCO GROUP</li>
              <li>PO BOX 322</li>
              <li>725 5TH AVENUE NEW YORK CITY </li>
              <li>NEW YORK, UNITED STATES</li>
              <li>MOBILE NUMBER: +1814808-5605 </li>
              <li>EMAIL: walancogroup@gmail.com </li>
            </ul>
          </div>
          <div>
            <h4>UNITED ARAB EMIRATE</h4>
            <ul>
              <li>WALANCO GROUP</li>
              <li>PO BOX E14 5HQ</li>
              <li>CANADA SQUARE,</li>
              <li>LONDON, UNITED KINGDOM</li>
              <li>MOBILE NUMBER:+44714612-6855 </li>
              <li>EMAIL: walancogroup@gmail.com </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <div className="newsletter-desc">
          <h2>Weekly Luxury Newsletter</h2>
          <p>
            Receive the beautifully curated selection of what’s trending in
            luxury with <br />
            inside stories and tips from our experts.
          </p>
        </div>

        <div className="newsletter-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <button type="submit">SUBSCRIBE</button>
            </div>
          </form>
          <p>
            BY SHARING YOUR EMAIL, YOU AGREE TO OUR TERMS OF USE AND PRIVACY.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
