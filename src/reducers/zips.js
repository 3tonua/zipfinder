import { combineReducers } from "redux";

import {
  ADD_ZIP,
  DELETE_ZIP,
  SELECT_ZIP,
  CHANGE_ZIP,
  ALERT
} from "../constants";

function zips(state = [], action) {
  switch (action.type) {
    case ADD_ZIP:
      state = [...state, action.payload];
      break;
    case DELETE_ZIP:
      let newState = [...state];
      let index = newState.findIndex(f => f[`post code`] === action.payload);
      newState.splice(index, 1);
      state = newState;
      break;
    case CHANGE_ZIP:
      newState = [...state];
      index = newState.findIndex(
        f => f[`post code`] === action.payload.oldZipNmb
      );
      newState[index] = action.payload.newZip;
      state = newState;
      break;
  }
  return state;
}

function selectedZip(state = null, action) {
  switch (action.type) {
    case SELECT_ZIP:
      state = action.payload;
      break;
    case CHANGE_ZIP:
      state = null;
      break;
  }
  return state;
}

function alert(state = { open: false, message: "" }, action) {
  switch (action.type) {
    case ALERT:
      state = action.payload;
      break;
  }
  return state;
}

export default combineReducers({
  zips,
  selectedZip,
  alert
});
