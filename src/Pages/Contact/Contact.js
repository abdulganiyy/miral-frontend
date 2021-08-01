import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-wrapper">
        <div className="inner-details">
          <h1>Contact Us</h1>
          <p>
            Our mailing address is: <br /> P.O.Box 30058, Abu Dhabi, <br />{" "}
            Phone:97126323299
          </p>
          <div className="icons-contact">
            <div>
              <i class="fab fa-instagram"></i>
            </div>
            <div>
              <i className="fab fa-facebook"></i>
            </div>
            <div>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
        <div className="inner-contact">
          <div className="form-wrapper-contact">
            <h5>
              Great Vision without great people is irrelevant <br /> Lets Work
              Together
            </h5>
            <form>
              <div>
                <input type="text" placeholder="Enter your name" value="" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter a valid email address"
                  value=""
                />
              </div>
              <div>
                <textarea value="" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
