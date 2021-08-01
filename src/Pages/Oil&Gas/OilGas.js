import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./OilGas.css";
import { Link } from "react-router-dom";

const OilGas = () => {
  return (
    <div>
      <div className="crudeoil-about-wrapper">
        <div>
          <h2>WELCOME TO OUR CRUDE OIL BROKERAGE PAGE</h2>
          <p>
            We are a dedicated crude oil brokerage company, working directly
            with buyers & sellers of crude oil and other petroleum products.
          </p>
        </div>
      </div>
      <div className="crudeoil-about">
        <div>
          <img
            alt="oil"
            src="https://crudeoilbrokers.org/wp-content/uploads/2014/02/oil-tanker-300x180.jpg"
          />
          <h3>About Our Crude Oil Brokerage</h3>
          <p>
            Crude Oil Brokers Ltd is a dedicated global crude oil facilitator
            for the buying/selling of crude oil and other petroleum products.
          </p>
        </div>
        <div>
          <img
            alt="oil"
            src="https://crudeoilbrokers.org/wp-content/uploads/2014/02/oil-rig-300x180.jpg"
          />
          <h3>How We Operate</h3>
          <p>
            We are a Nigerian based firm that operates globally through stations
            in Nigeria and the UK. We are privately owned and devoted to the oil
            buying and selling brokerage.
          </p>
        </div>
        <div>
          <img
            alt="oil"
            src="https://crudeoilbrokers.org/wp-content/uploads/2014/02/oilpipelines-300x180.jpg"
          />
          <h3>Who We Work With</h3>
          <p>
            We work directly with crude oil & other petroleum products buyers
            and sellers, small, medium and large companies, corporations,
            refineries and governments.
          </p>
        </div>
        <div>
          <img
            alt="oil"
            src="https://crudeoilbrokers.org/wp-content/uploads/2014/02/oil-prices-300x180.jpg"
          />
          <h3>Need Our Help?</h3>
          <p>
            We work very hard, rapidly and efficiently while paying particular
            attention to detail to achieve satisfaction for both crude oil
            buyers and sellers.
          </p>
        </div>
      </div>
      <div className="contact-info-crudeoil">
        <div className="contact-info-crudeoil-heading">
          <p>
            If you are a buyer or seller of crude oil and you need help with
            finding a seller or buyer respectively, please contact us today.
          </p>
          <span>
            <Link to="/contact">Contact Us</Link>
          </span>
        </div>
        <div className="contact-info-crudeoil-details">
          <div>
            <div>
              <i className="fas fa-user-circle"></i>
            </div>
            <h3>END- BUYERS AND SELLERS</h3>
            <p>
              We work directly with end-buyers (such as oil refineries) or
              re-sellers of crude oil that have the available funds to purchase
              Nigerian Bonny Light Crude oil, BLCO, AGO, D2 Diesel oil, JP54
              Jetfuel, Mazut & more.
            </p>
          </div>
          <div>
            <div>
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>REASONABLE PROCEDURES</h3>
            <p>
              The buyers and sellers that we work with are usually reasonable in
              their expected sale procedures. We expect procedures that protect
              the interests of both buyers and sellers.
            </p>
          </div>
          <div>
            <div>
              <i className="fas fa-info-circle"></i>
            </div>
            <h3>SEND US INFORMATION</h3>
            <p>
              If you are a buyer of Nigerian bonny light crude oil or other
              petroleum products or are a seller and need our services, please
              send us full information of your needs using the form below or on
              our <Link to="/contact">contact page.</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="crudeoil-whyus">
        <h2>WHY WORK WITH US?</h2>
        <h4>What are the benefits of working with Crude Oil Brokers?</h4>
        <div className="whyus-details">
          <div>
            <i className="fas fa-tint"></i>
            <h2>DEDICATION</h2>
          </div>
          <div>
            <i className="fas fa-lightbulb"></i>
            <h2>PARTNERSHIP</h2>
          </div>
          <div>
            <i className="fas fa-anchor"></i>
            <h2>EMPOWERMENT</h2>
          </div>
          <div>
            <i className="fas fa-history"></i>
            <h2>DIVERSITY</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OilGas;
