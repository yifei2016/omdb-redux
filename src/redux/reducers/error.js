export const initialState = '';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_ERROR":  
      return action.body;
    default:
      return state
  }
}

export default reducer;

