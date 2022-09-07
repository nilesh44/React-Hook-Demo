//declearing initial state of the counterReducer
export const initialState = 0;

//declearing reducer for counter
//for every action we can perform specific computation on state
export const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      console.log(action.payload);
      return state + 1;
    case "decrement":
      console.log(action.payload);
      return state - 1;
    case "reset":
      console.log(action.payload);
      return 0;
    default:
      break;
  }
};
