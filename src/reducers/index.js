import { combineReducers } from "redux";

import searchValue from "./search";
import zips from "./zips";

export default combineReducers({
  searchValue,
  zips
});
