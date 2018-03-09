const error = (state = '', action) => {
  switch (action.type) {
    case "SHOW_ERROR":  
      return action.body;
    default:
      return state
  }
}

export default error;

