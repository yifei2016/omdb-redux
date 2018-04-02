import { setEpisodes, showError, hideSpinner, searchedParam, emptyEpisode, displaySpinner } from 'redux/actions';
import * as api from 'api';

export const searchEpisodeApiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== 'api_searchEpisode')
    return next(action);
  
  const { url } = action.meta;
  
  
  const searchedParamAction = searchedParam(action.body);

  store.dispatch(searchedParamAction);
  store.dispatch({ type: 'SEARCH_EPISODES_REQUEST' });
  
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
      store.dispatch({ type: 'SEARCH_EPISODES_SUCCESS', payload: result });
    })
    .catch(error => { 
      store.dispatch({type: 'SEARCH_EPISODES_FAILURE', payload: error});
    })
}

export default searchEpisodeApiMiddleware;