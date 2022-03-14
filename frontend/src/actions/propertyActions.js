import {
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAIL,
  PROPERTY_DETAILS_REQUEST,
  PROPERTY_DETAILS_SUCCESS,
  PROPERTY_DETAILS_FAIL,
  PROPERTY_LANDLORD_REQUEST,
  PROPERTY_LANDLORD_SUCCESS,
  PROPERTY_LANDLORD_FAIL,
  SUBMIT_PROPERTY_REQUEST,
  SUBMIT_PROPERTY_SUCCESS,
  SUBMIT_PROPERTY_FAIL,
} from "../constants/propertyConstants";
import axios from "axios";

export const listProperties = (keyword='', property_type='', no_of_beds=2, no_of_baths=3, minValue=10000, maxValue=300000) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_LIST_REQUEST });

    const { data } = await axios.get(`/api/properties/?keyword=${keyword}&rent__gt=${minValue}&rent__lt=${maxValue}&no_of_beds=${no_of_beds}&no_of_baths=${no_of_baths}&property_type=${property_type}`);

    dispatch({ type: PROPERTY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROPERTY_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
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
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const listLandlordProperties = (token) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_LANDLORD_REQUEST });

    const { data } = await axios.get(`/api/landlordProperties`, {headers: {"Authorization": `Bearer ${token}`}});

    dispatch({ type: PROPERTY_LANDLORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROPERTY_LANDLORD_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const submitProperty = (property, token) => async (dispatch) => {
  try {
    dispatch({ type: SUBMIT_PROPERTY_REQUEST });
    
    // const { data } = await axios.get(`/api/submitProperty`, {headers: {"Authorization": `Bearer ${token}`}});
    const config = {
      headers: {
          'Content-type': 'application/json',
          Authorization:  `Bearer ${token}`
      }
  }
  const {data} = await axios.post(
      '/api/submitProperty/',
      property,
      config
  )

    dispatch({ type: SUBMIT_PROPERTY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SUBMIT_PROPERTY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

