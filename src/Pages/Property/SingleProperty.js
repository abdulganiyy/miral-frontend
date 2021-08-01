import React from "react";
import { useSelector } from "react-redux";
import mapboxgl from "mapbox-gl";
import Footer from "../../Components/Footer/Footer";

import "./SingleProperty.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJkdWxnYW5peXkiLCJhIjoiY2tyNTRueWRlMzF5ODJ3bzZsYnNxajM2eCJ9.3F-b2a-8BsLEoTJCFb_wFg";

const SingleProperty = ({ match }) => {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const mapContainer = React.useRef(null);
  const properties = useSelector((state) => state.realestate.properties);
  const property = properties.find((item) => item._id === match.params.id);
  console.log(property);

  // initialize map when component mounts
  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/abdulganiyy/ckr65arx00ril18pa14xop54r",
      center: [-74.5, 40],
      zoom: 3,
      // attributionControl: false,
    });

    // create a HTML element for each feature
    var el = document.createElement("div");
    el.className = "marker";

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat([-73, 40.7128]).addTo(map);

    // const marker = new mapboxgl.Marker().setLngLat([-73, 40.7128]).addTo(map);
    // const marker = new mapboxgl.Marker()
    //   .setLngLat([103.811279, 1.345399])
    //   .addTo(map);

    // dd navigation control (the +/- zoom buttons)
    // map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
    <>
      <div>
        {/* <div style={{ height: "100px" }}></div> */}
        <div className="SingleProperty">
          <div className="gallery">
            {/* <Image
            cloudName="dequo8fxt"
            publicId={property.photos[0]}
            crop="fill"
          /> */}
            <img
              alt="img"
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
            <div className="location">
              <h3>Location</h3>
            </div>
            <div id="map" ref={mapContainer} className="map-container"></div>
            <div className="single-property-footer">
              <h3>Listed By</h3>
              <p>Miral Groups Limited</p>
              <div>
                <p className="greyy">Address</p>
                <p>
                  66 Al Ain - Dubai Road - Dubai - Dubai - United Arab Emirates
                </p>
              </div>
              <div>
                <p className="greyy">Reference</p>
                <p>{property._id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProperty;
