import React from "react";
import { useSelector } from "react-redux";
// import { Image } from "cloudinary-react";
// import 'mom'

import "./SingleProperty.css";

const SingleProperty = ({ match }) => {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const properties = useSelector((state) => state.realestate.properties);
  const property = properties.find((item) => item._id === match.params.id);
  console.log(property);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {/* <div style={{ height: "100px" }}></div> */}
      <div
        className="SingleProperty"
        style={{ position: "relative", top: "100px" }}
      >
        <div className="gallery">
          {/* <Image
            cloudName="dequo8fxt"
            publicId={property.photos[0]}
            crop="fill"
          /> */}
          <img
            src={`https://res.cloudinary.com/dequo8fxt/image/upload/v1625476104/${property.photos[0]}.jpg`}
            width="100%"
          />
        </div>
        <div className="info">
          <div className="info-header">
            <p>REAL ESTATE</p>
            <p>{property.name}</p>
            <p>{property.city}</p>
            <p>{property.country}</p>
          </div>
          <div className="info-body">
            <h2>
              {property.rooms} Bedrooms {property.propertyType}
            </h2>
            <h2>${property.price.toLocaleString()}</h2>
            <div className="info-body-icons">
              <div className="info-body-icon">
                <span>
                  <i class="fas fa-bed"></i> {property.rooms}
                </span>
                <span>Bedrooms</span>
              </div>
              <div className="info-body-icon">
                <span>
                  <i class="fas fa-bath"></i> {property.baths}
                </span>
                <span>Bathrooms</span>
              </div>
            </div>
            <div>
              <a href="#agent">CONTACT AGENT</a>
            </div>
            <div className="company-info">
              <div>
                <span>Listed By</span>
                <span>Miral Global</span>
              </div>
              <div>Miral</div>
            </div>
          </div>
          <div className="description">
            <h2>Description</h2>
            <div>{property.description}</div>
          </div>
          <div>
            <div className="building-info-container">
              <h2>Building Info</h2>
              <div className="building-info">
                <div>
                  <p>Year Built</p>
                  <p>{property.yearBuilt}</p>
                </div>
                <div>
                  <p>Property Type</p>
                  <p>{property.propertyType}</p>
                </div>
              </div>
            </div>
          </div>
          <div id="agent" className="contact-form">
            <div className="agent-name">Contact Agent</div>
            <form>
              <div className="form-body">
                <div className="form-control">
                  <input
                    type="text"
                    value={data.name}
                    placeholder="Name"
                    onChange={onChange}
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    value={data.email}
                    placeholder="Email"
                    onChange={onChange}
                  />
                </div>
                <div className="form-control">
                  <input
                    className="message-input"
                    type="text"
                    value={data.message}
                    placeholder="Enter your message"
                    onChange={onChange}
                  />
                </div>
                <div className="form-control">
                  <button
                    type="submit"
                    className="submit-button"
                    onSubmit={onSubmit}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
