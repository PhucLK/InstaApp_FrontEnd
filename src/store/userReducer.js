// user reducer
import { CURRENT_USER, UPDATE_USER } from "../constants/userConstants";

function userReducer(state, action) {
  switch (action.type) {
    case CURRENT_USER:
      return { ...state, user: action.payload };
    case UPDATE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export default userReducer;
