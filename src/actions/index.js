import axios from "axios";
import {
  ADD_ZIP,
  DELETE_ZIP,
  SELECT_ZIP,
  CHANGE_ZIP,
  ALERT,
  SEARCH_VALUE
} from "../constants";

const alertMsg = {
  range: "Please, enter zip code in the range 210 ~ 99950",
  addedZip: "Zip code has already added to the list",
  notFound: "Zip code not found"
};

export const setSearchValue = data => dispatch => {
  data = data || "";
  return dispatch({ type: SEARCH_VALUE, payload: data });
};

export const addZip = value => (dispatch, getState) => {
  const state = getState();
  const zips = state.zips.zips.map(v => v[`post code`]);
  const selectedZip = state.zips.selectedZip;

  if (value < 210 || value > 99950)
    return dispatch(openAlert(alertMsg.rangeAlert));

  if (zips.indexOf(value + "") > -1) {
    return dispatch(openAlert(alertMsg.addedZip));
  }

  axios
    .get(`https://api.zippopotam.us/us/${value}`)
    .then(reply => {
      if (selectedZip) {
        return dispatch({
          type: CHANGE_ZIP,
          payload: { oldZipNmb: selectedZip, newZip: reply.data }
        });
      }
      dispatch({ type: ADD_ZIP, payload: reply.data });
    })
    .catch(error => {
      if (error.response) {
        dispatch(openAlert(alertMsg.notFound));
      }
    });
};

export const deleteZip = zip => dispatch => {
  return dispatch({ type: DELETE_ZIP, payload: zip });
};

export const selectZip = zip => dispatch => {
  return dispatch({ type: SELECT_ZIP, payload: zip });
};

export const openAlert = message => dispatch => {
  dispatch({
    type: ALERT,
    payload: { open: true, message }
  });
};

export const closeAlert = () => dispatch => {
  dispatch({ type: ALERT, payload: { open: false, message: "" } });
};
