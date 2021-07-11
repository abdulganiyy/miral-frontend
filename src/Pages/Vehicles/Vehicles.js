import React from "react";
import Slider from "../../Components/Slider/Slider";
import { fetchVehicles } from "../../redux/actions/automobileActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import "./Vehicles.css";

const categories = [
  {
    name: "CARS",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "BOATS",
    img: "https://images.unsplash.com/photo-1568476612160-787b6a1d5fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80",
  },
  {
    name: "YACHTS",
    img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "AEROPLANES",
    img: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
  },
];

const Vehicles = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.automobile.vehicles);
  console.log(vehicles);

  React.useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);
  return (
    <div>
      <Slider contents={categories} />
      <div className="vehicles">
        {vehicles ? (
          vehicles.map((vehicle, index) => {
            return (
              <Link key={index} to={`vehicles/${vehicle._id}`}>
                <div>
                  <Image
                    cloudName="dequo8fxt"
                    publicId={vehicle.photos[0]}
                    width="300"
                    crop="fit"
                  />
                  <p>{vehicle.name}</p>
                  <p>${vehicle.price.toLocaleString()}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
};

export default Vehicles;
