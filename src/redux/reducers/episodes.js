const episodes = (state = [], action) => {
  switch (action.type) {
    case "ADD_EPISODE":  
      return state.concat(action.body);
    case "EMPTY_EPISODE":  
      return [];
    default:
      return state
  }
}

export default episodes;

