import React from "react";
import Slider from "../../Components/Slider/Slider";
import { fetchVehicles } from "../../redux/actions/automobileActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Vehicles.css";
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
      <div className="categories">
        <div className="category">
          <img
            alt="cat"
            src="https://img.jamesedition.com/listing_images/2018/05/18/19/38/51/647c9c6d-4529-41e5-a5ea-081cd1538cb3/je/1040x620xc.jpg"
          />
          <div>
            <p>
              <p>Aeroplanes</p>
              <p style={{ margin: "0px" }}>123,600 LIstings</p>
            </p>
            <Link to="/vehicles/aeroplane">
              <i class="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>

        <div className="category">
          <img
            alt="cat"
            src="https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80"
          />
          <div>
            <p>
              <p>Cars</p>
              <p style={{ margin: "0px" }}>123,600 LIstings</p>
            </p>
            <Link to="/vehicles/car">
              <i class="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
        <div className="category">
          <img
            alt="cat"
            src="https://img.jamesedition.com/listing_images/2021/06/24/16/10/41/bd4146af-f94e-4cd8-9dd4-686eb61da864/je/1040x620xc.jpg"
          />
          <div>
            <p>
              <p>Yachts</p>
              <p style={{ margin: "0px" }}>123,600 LIstings</p>
            </p>
            <Link to="/vehicles/yacht">
              <i class="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vehicles;
