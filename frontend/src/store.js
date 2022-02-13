import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  propertyListReducer,
  propertyDetailsReducer,
  propertyLandlordReducer

} from "./reducers/propertyReducers";

import { userLoginReducers, userRegisterReducers, userDetailReducers, userUpdateReducers } from './reducers/userReducers'

const reducer = combineReducers({
  propertyList: propertyListReducer,
  propertyDetails: propertyDetailsReducer,
  userLogin: userLoginReducers,
  userRegister: userRegisterReducers,
  landlordProperties: propertyLandlordReducer,
  userDetail: userDetailReducers,
  userUpdate: userUpdateReducers
});


const userInfoFromStorage = localStorage.getItem('userInfo') ?
  JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
  userLogin: {userInfo: userInfoFromStorage}
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
