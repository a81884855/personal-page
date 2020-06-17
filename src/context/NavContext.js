import createDataContext from "./createDataContext";

const navReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { leaveLandingPage: action.playload };
    default:
      return state;
  }
};

const Toggle = (dispatch) => async (boolean) => {
  dispatch({ type: "toggle", playload: boolean });
};

export const { Provider, Context } = createDataContext(
  navReducer,
  { Toggle },
  { leaveLandingPage: true }
);
