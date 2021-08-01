import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./Ict.css";

const Ict = () => {
  return (
    <div>
      <div className="ict-about">
        <img
          alt="ict-img"
          src="https://www.tcd.ie/business/assets/img/ICT.jpg"
        />
      </div>
      <div className="ict-details">
        <p>
          Traditionally, access control and intrusion detection systems have
          worked independently of each other. ICT brings these together to
          provide a single cohesive and unified solution that helps you keep
          unwanted visitors outside, while enabling you to monitor and control
          access inside.
        </p>
        <div className="ict-details-grid">
          <div>
            <img
              alt="img1"
              src=" https://www.ict.co/media/easy-intuitive.jpg "
            />
            <p>Intuitive to learn. Easy to use.</p>
            <p>
              Designed with the end user in mind, a Protege system offers an
              intuitive and user friendly interface that is loaded with features
              for controlling and monitoring your site from one unified
              platform.
            </p>
          </div>
          <div>
            <img alt="img2" src="https://www.ict.co/media/maximum-value.jpg" />
            <p>One solution. Maximum value.</p>
            <p>
              ICT's open technology allows our products to integrate seamlessly
              with your existing systems, providing a comprehensive solution
              that adds value to the infrastructure investments you already have
              on site.
            </p>
          </div>
          <div>
            <img
              alt="img3"
              src="https://www.ict.co/media/design-dispatch.jpg"
            />
            <p>From design to dispatch. We do it all.</p>
            <p>
              Every ICT product is designed, manufactured, and dispatched from
              our state of the art purpose-built premises, with 100% of products
              going through rigorous testing to ensure superior quality and
              safety.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ict;
