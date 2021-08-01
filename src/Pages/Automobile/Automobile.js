import React from 'react';
import Slider from "../../Components/Slider/Slider";
import { fetchVehicles } from "../../redux/actions/automobileActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import "../Vehicles/Vehicles.css";
import Footer from "../../Components/Footer/Footer";

const categories = [
  {
    name: "CARS",
    img: "https://img.jamesedition.com/listing_images/2021/05/04/11/26/23/7f648245-4984-4a47-9c4e-502f4d6dcd04/je/1040x620xc.jpg",
  },
  {
    name: "BOATS",
    img: "https://img.jamesedition.com/listing_images/2021/07/10/03/53/08/b4129682-029a-42d6-8741-bbbf3e6c8ca0/je/1040x620xc.jpg",
  },
  {
    name: "YACHTS",
    img: "https://img.jamesedition.com/listing_images/2019/08/16/16/28/24/8781502f-aef4-4148-8f72-7a8e586473f4/je/1040x620xc.jpg",
  },
  {
    name: "AEROPLANES",
    img: "https://img.jamesedition.com/listing_images/2020/07/22/20/07/06/09007f7a-f549-411d-88f0-4efe78b3d84d/je/1040x620xc.jpg",
  },
];

const Automobile = ({match}) => {

    const type = match.params.type;

    const dispatch = useDispatch();
    let vehicles = useSelector((state) => state.automobile.vehicles);
  

  React.useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  vehicles.filter(vehicle => vehicle.type === type);
  
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
         <Footer />   
        </div>
    );
};

export default Automobile;