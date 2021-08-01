import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./Solar.css";

const Solar = () => {
  return (
    <div>
      <div className="solar-about">
        <div>
          <h1>
            Make your world Eco-Friendly <br /> with our Solar Services
          </h1>
        </div>
      </div>
      <div className="solar-vision">
        <img
          alt="vision"
          src="https://i2.wp.com/www.rubitecsolar.com/wp-content/uploads/2018/07/power-solar-edited-300x200.jpg?resize=300%2C200"
        />
        <h3>Our Visions</h3>
        <p>
          Our Vision is to be an Integrated Renewable Energy company and
          Independent Power Producer providing electric power from Renewable
          Energy Technologies, RETs, for the benefit of rural and urban
          communities.
        </p>
      </div>
      <div className="why-solar">
        <h2>WHY SOLAR</h2>
        <div className="why-solar-items">
          <div>
            <div>
              <i class="fas fa-recycle"></i>
            </div>
            <div>
              <h3>RELIABLE AND CONSISTENT POWER SUPPLY</h3>
              <p>
                Solar provides a consistent and regular means of power supply.
              </p>
            </div>
          </div>
          <div>
            <div>
              <i class="fas fa-tools"></i>
            </div>
            <div>
              <h3>MAINTENANCE FREE</h3>
              <p>
                By going in for solar power, you will cut your cost of
                electricity at home or office.
              </p>
            </div>
          </div>
          <div>
            <div>
              <i class="fas fa-globe"></i>
            </div>
            <div>
              <h3>ECO FRIENDLY</h3>
              <p>
                Solar is environment friendly, as a result CO2 emissions are
                reduced, which contributes less to global warming.
              </p>
            </div>
          </div>
          <div>
            <div>
              <i class="fas fa-cloud"></i>
            </div>
            <div>
              <h3>FREE AND ABUNDANT ENERGY SOURCE</h3>
              <p>
                Solar energy serves as an important source of renewable energy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solar;
