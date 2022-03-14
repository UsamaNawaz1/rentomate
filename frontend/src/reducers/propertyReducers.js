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

export const propertyListReducer = (state = { properties: [] }, action) => {
  switch (action.type) {
    case PROPERTY_LIST_REQUEST:
      return { loading: true, properties: [] };
    //when the api fetch the property data -> we set the loading to false
    //and properties list that was empty by default to payload.
    case PROPERTY_LIST_SUCCESS:
      return { loading: false, properties: action.payload };

    case PROPERTY_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const propertyDetailsReducer = (
  state = { property: {} },
  action
) => {
  switch (action.type) {
    case PROPERTY_DETAILS_REQUEST:
      return { loading: true, ...state };
    //when the api fetch the property data -> we set the loading to false
    //and property object that was empty by default to payload.
    case PROPERTY_DETAILS_SUCCESS:
      return { loading: false, property: action.payload };

    case PROPERTY_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const propertyLandlordReducer = (state = { landlord_properties: [] }, action) => {
  switch (action.type) {
    case PROPERTY_LANDLORD_REQUEST:
      return { loading: true, landlord_properties: [] };
    //when the api fetch the property data -> we set the loading to false
    //and landlord_properties LANDLORD that was empty by default to payload.
    case PROPERTY_LANDLORD_SUCCESS:
      return { loading: false, landlord_properties: action.payload };

    case PROPERTY_LANDLORD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const submitPropertydReducer = (state = { }, action) => {
  switch (action.type) {
    case SUBMIT_PROPERTY_REQUEST:
      return { loading: true };
    //when the api fetch the property data -> we set the loading to false
    //and submit_property LANDLORD that was empty by default to payload.
    case SUBMIT_PROPERTY_SUCCESS:
      return { loading: false, submit_property: action.payload };

    case SUBMIT_PROPERTY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
