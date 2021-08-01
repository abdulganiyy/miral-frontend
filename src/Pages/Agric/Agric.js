import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./Agric.css";

const Agric = () => {
  return (
    <div>
      <div className="agric-about">
        <img
          alt="agric-field"
          src="https://inhabitat.com/wp-content/blogs.dir/1/files/2012/11/farm-field-corn-agriculture-cool-calculator-institute-unilever-fishhawk.jpg"
        />
        <div>
          <p>Changing your approach to Agro Participation</p>
          <p>
            Partner with us for a viable and sustainable agric business by
            owning efficiently managed farmlands on our aggregate Agro-Real
            Estate platform.
          </p>
        </div>
      </div>
      <div className="agric-details">
        <h2>The Unparalleled Opportunity</h2>
        <p>
          The potential of the agricultural sector is one that is yet to be
          fully tapped. Farmers who have realized this have exponentially
          increased their worth by investing more. We are working with both
          farmers and non-farmers to boost the production of more crops to boost
          the global economy.
        </p>
      </div>
      <div className="agric-values">
        <div>
          <i class="fas fa-globe"></i>
          <h3>Accountability</h3>
          <p>
            We take responsibility of handling Your Investments to create mind
            blowing returns.
          </p>
        </div>
        <div>
          <i class="fas fa-square"></i>
          <h3>Transparency</h3>
          <p>
            We keep you informed on all activities around your farmland from
            planting to harvesting.
          </p>
        </div>
        <div>
          <i class="fas fa-circle"></i>
          <h3>Diligence</h3>
          <p>
            We are domain experts you can can rely on. We deliver consistent
            excellence for all stakeholders
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Agric;
