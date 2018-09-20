import { SEARCH_VALUE, ADD_ZIP, SELECT_ZIP, CHANGE_ZIP } from "../constants";

function searchValue(state = null, action) {
  switch (action.type) {
    case SEARCH_VALUE:
      state = action.payload;
      break;
    case ADD_ZIP:
    case CHANGE_ZIP:
      state = null;
      break;
    case SELECT_ZIP:
      state = action.payload;
      break;
  }
  return state;
}

export default searchValue;
