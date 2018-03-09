export const addEpisode = (body) => ({
  type: 'ADD_EPISODE',
  body
});
export const searchedShow = (body) => ({
  type: 'SEARCHED_SHOW',
  body
});
export const emptyEpisode = () => ({
  type: 'EMPTY_EPISODE'
});
export const setEpisodes = (body) => ({
  type: 'SET_EPISODES',
  body
});
export const displaySpinner = () => ({
  type: 'DISPLAY_SPINNER'
});
export const hideSpinner = () => ({
  type: 'HIDE_SPINNER'
});
export const showError = (body) => ({
  type: 'SHOW_ERROR',
  body
});