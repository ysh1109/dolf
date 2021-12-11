import { ADD_DATA, REMOVE_DATA, RESET_DATA } from "./Actions";

const initialState = {
  userData: {
    first_name: "Yash",
    last_name: "Test",
    email: "Yash",
    mobile: "6466487976",
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        ...action?.payload,
      };
    case RESET_DATA:
      return {
        userData: state["userData"],
      };
    case REMOVE_DATA:
      return {
        ...state,
      };
    default:
      return state;
  }
}
export default reducer;
