import { setEpisodes, showError, hideSpinner, searchedParam, emptyEpisode, displaySpinner } from 'redux/actions';
import * as api from 'api';

export const searchEpisodeApiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== 'api_searchEpisode')
    return next(action);
  
  const { url } = action.meta;
  
  const emptyEpisodeAction = emptyEpisode();
  const displaySpinnerAction = displaySpinner();
  const searchedParamAction = searchedParam(action.body);
  store.dispatch(emptyEpisodeAction);
  store.dispatch(displaySpinnerAction);
  store.dispatch(searchedParamAction);

  return api.searchShow(url, action.body)
    .then(result => {
      return result.Episodes.map(e => {
        let promise = api.getEpisode(url, e.imdbID)
          .then(episode => {
            if (episode === undefined) throw new Error(`Error message`);
            return episode.data;
          });
        return promise;
      });
    })
    .then(promiseArray => Promise.all(promiseArray))
    .then(result => {
      const setEpisodeAction = setEpisodes(result);
      store.dispatch(setEpisodeAction);
    })
    .catch(error => { 
      const showErrorAction = showError(error.message);
      store.dispatch(showErrorAction);
    })
    .finally(() => { 
      const hideSpinnerAction = hideSpinner();
      store.dispatch(hideSpinnerAction);
    });
}

export default searchEpisodeApiMiddleware;