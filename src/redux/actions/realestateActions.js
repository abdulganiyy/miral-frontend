import axios from "axios";

import {
  FETCH_PROPERTIES_START,
  FETCH_PROPERTIES_FAIL,
  FETCH_PROPERTIES_SUCCESS,
} from "./actionsTypes";

const fetchPropertiesStart = () => {
  return {
    type: FETCH_PROPERTIES_START,
  };
};

const fetchPropertiesFail = (message) => {
  return {
    type: FETCH_PROPERTIES_FAIL,
    message,
  };
};

const fetchPropertiesSuccess = (data) => {
  return {
    type: FETCH_PROPERTIES_SUCCESS,
    properties: data,
  };
};

export const fetchProperties = () => {
  return (dispatch) => {
    dispatch(fetchPropertiesStart);

    axios
      .get("https://miral-backend.herokuapp.com/properties")
      .then((res) => {
        dispatch(fetchPropertiesSuccess(res.data.properties));
      })
      .catch((err) => {
        dispatch(fetchPropertiesFail(err.response.data.message));
      });
  };
};
