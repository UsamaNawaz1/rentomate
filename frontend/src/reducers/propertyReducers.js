import {
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAIL,
  PROPERTY_DETAILS_REQUEST,
  PROPERTY_DETAILS_SUCCESS,
  PROPERTY_DETAILS_FAIL,
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
  state = { property: { reviews: [] } },
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
