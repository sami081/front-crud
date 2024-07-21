import { DELETE_USER, GET_USER, UPDATE_PHONE } from "../actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPDATE_PHONE:
      return { ...state, phone: action.payload };
      case DELETE_USER:
        return { state, userId : action.payload};
    default:
      return state;
  }
}
