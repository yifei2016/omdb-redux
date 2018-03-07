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
