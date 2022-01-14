import {
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAIL,
  PROPERTY_DETAILS_REQUEST,
  PROPERTY_DETAILS_SUCCESS,
  PROPERTY_DETAILS_FAIL,
} from "../constants/propertyConstants";
import axios from "axios";

export const listProperties = () => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_LIST_REQUEST });

    const { data } = await axios.get("/api/properties/");

    dispatch({ type: PROPERTY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROPERTY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPropertyDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/property/${id}`);

    dispatch({ type: PROPERTY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROPERTY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
