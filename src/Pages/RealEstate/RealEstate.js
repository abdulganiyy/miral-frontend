import React from "react";
import Slider from "../../Components/Slider/Slider";
import { fetchProperties } from "../../redux/actions/realestateActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import "./RealEstate.css";

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

const RealEstate = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.realestate.properties);
  console.log(properties);

  React.useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);
  return (
    <div>
      <Slider contents={categories} />
      <div className="properties">
        {properties ? (
          properties.map((property, index) => {
            return (
              <Link key={index} to={`/properties/${property._id}`}>
                <div className="property">
                  <Image
                    cloudName="dequo8fxt"
                    publicId={property.photos[0]}
                    width="300"
                    crop="fit"
                  />
                  <p>
                    {property.name} in {property.city},{property.state},
                    {property.country}
                  </p>
                  <p>${property.price.toLocaleString()}</p>
                  <div style={{ display: "flex" }}>
                    <p>{property.baths} bathrooms</p>
                    <p style={{ marginLeft: "10px" }}>
                      {property.rooms} bedrooms
                    </p>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </div>
      <div style={{ height: "300px", backgroundColor: "red" }}>hello</div>
    </div>
  );
};

export default RealEstate;
