import React from "react";
import Slider from "../../Components/Slider/Slider";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";

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
    img: "https://images.unsplash.com/photo-1610998342124-c4fcba4cf4bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "SOLAR ENERGY",
    img: "https://images.unsplash.com/photo-1584276433295-4b49a252e5ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=742&q=80",
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
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
