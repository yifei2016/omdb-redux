const searchedShow = (state = 'Silicon Valley', action) => {
  switch (action.type) {
    case "SEARCHED_SHOW":
      return action.body;
    default:
      return state
  }
}

export default searchedShow;

