import axios from "axios";

import {
  FETCH_VEHICLES_START,
  FETCH_VEHICLES_FAIL,
  FETCH_VEHICLES_SUCCESS,
} from "./actionsTypes";

const fetchVehiclesStart = () => {
  return {
    type: FETCH_VEHICLES_START,
  };
};

const fetchVehiclesFail = (message) => {
  return {
    type: FETCH_VEHICLES_FAIL,
    message,
  };
};

const fetchVehiclesSuccess = (data) => {
  return {
    type: FETCH_VEHICLES_SUCCESS,
    vehicles: data,
  };
};

export const fetchVehicles = () => {
  return (dispatch) => {
    dispatch(fetchVehiclesStart);

    axios
      .get("https://miral-backend.herokuapp.com/vehicles")
      .then((res) => {
        dispatch(fetchVehiclesSuccess(res.data.vehicles));
      })
      .catch((err) => {
        dispatch(fetchVehiclesFail(err.response.data.message));
      });
  };
};
