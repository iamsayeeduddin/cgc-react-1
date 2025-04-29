const initialState = {};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN_SUCCESS":
      return { ...state, ...action.payload };
    case "LOGGED_OUT":
      return initialState;
    default:
      state;
  }
};

export default LoginReducer;
