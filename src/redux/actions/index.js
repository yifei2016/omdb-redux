import { CALL_API } from 'redux-api-middleware';
import * as api from 'api';

export const addEpisode = (body) => ({
  type: 'ADD_EPISODE',
  body
});

export const searchedParam = (body) => ({
  type: 'SEARCHED_PARAM',
  body
});

export const setEpisodes = (body) => ({
  type: 'SET_EPISODES',
  body
});


export const SEARCH_EPISODES_REQUEST = 'SEARCH_EPISODES_REQUEST';
export const SEARCH_EPISODES_SUCCESS = 'SEARCH_EPISODES_SUCCESS';
export const SEARCH_EPISODES_FAILURE = 'SEARCH_EPISODES_FAILURE';

export const searchEpisodes = (searchedParam) => ({
  [CALL_API]: {
    types: [
      SEARCH_EPISODES_REQUEST,
      {
        type: SEARCH_EPISODES_SUCCESS,
        payload: (action, state, res) => res.json().then(result =>result.Episodes)  
      },
      SEARCH_EPISODES_FAILURE
    ],
    endpoint: `http://www.omdbapi.com/?apikey=541531cc&t=${searchedParam}&Season=1`,
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
});

export const searchEpisodesThunk = (query) => {
  return (dispatch) => {
    dispatch({ type: 'SEARCH_EPISODES_REQUEST' })
    return api.searchShow(query)
      .then(res => {
        return res.Episodes
          .map(episode => episode.imdbID)
          .map(id => { 
          return api.getEpisode(id)
        })
      })
      .then(promise => Promise.all(promise))
      .then(result => result.map(episode => episode.data))
      .then(result => dispatch({ type: 'SEARCH_EPISODES_SUCCESS', payload: result }))
      .catch(error => dispatch({type: 'SEARCH_EPISODES_FAILURE', payload: error}))
  }
};

