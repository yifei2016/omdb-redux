const episodes = (state = [], action) => {
  switch (action.type) {
    case "ADD_EPISODE":
      return state.concat(action.body);
    default:
      return state
  }
}

export default episodes;

