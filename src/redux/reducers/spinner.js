const spinner = (state = 'none', action) => {
  switch (action.type) {
    case "DISPLAY_SPINNER":
      return 'block';
    case "HIDE_SPINNER":
      return 'none';
    default:
      return state
  }
}

export default spinner;

