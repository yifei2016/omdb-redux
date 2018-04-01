export const initialState = 'Silicon Valley';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCHED_PARAM":  
      return action.body;  
    default:
      return state
  }
}

export default reducer;

