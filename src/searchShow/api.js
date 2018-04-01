import axios from 'axios';
// import searchEpisodes from 'redux/actions';
import { setEpisodes, showError, hideSpinner, searchedParam, emptyEpisode, displaySpinner } from 'redux/actions';

export const apiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== 'api')
    return next(action);
  
  const { url } = action.meta;
  const emptyEpisodeAction = emptyEpisode();
  const displaySpinnerAction = displaySpinner();
  const searchedParamAction = searchedParam(action.body);
  store.dispatch(emptyEpisodeAction);
  store.dispatch(displaySpinnerAction);
  store.dispatch(searchedParamAction);
  
  return searchShow(url, action.body)
    .then(result => {
      return result.Episodes.map(e => {
        let promise = getEpisode(url, e.imdbID)
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

const searchShow = (url,searchParam) => (
  axios.get(url, {
    params: {
      apikey: '541531cc',
      t: searchParam,
      Season: 1
    }
  })
    .then(response => {
      let result = response.data;
      return result;
    })
)

export const getEpisode = (url,searchParam) => (
  axios.get(url, {
    params: {
      apikey: '541531cc',
      i: searchParam,
      plot: 'short',
      r: 'json'
    }
  })
)

    