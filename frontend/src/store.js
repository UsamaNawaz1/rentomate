import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  propertyListReducer,
  propertyDetailsReducer,
} from "./reducers/propertyReducers";

const reducer = combineReducers({
  propertyList: propertyListReducer,
  propertyDetails: propertyDetailsReducer,
});
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
