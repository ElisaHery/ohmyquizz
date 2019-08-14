/*
{
    isLoaded: false
}
*/

import { combineReducers } from "redux";

const isLoaded = (state = false, action) => {
  switch (action.type) {
    case "SET_LOADED":
      return true;
    default:
      return state;
  }
};

const title = (state = "", action) => {
  switch (action.type) {
    case "SET_TITLE":
      return action.payload;
    case "RESET_TITLE":
      return state;
    default:
      return state;
  }
};

const windowSize = (state = false, action) => {
  switch (action.type) {
    case "SET_APP_FULLSCREEN":
      return true;
    case "RESET_APP_FULLSCREEN":
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  isLoaded,
  title,
  fullScreen: windowSize
});
