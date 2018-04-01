import {combineReducers} from 'redux';
import * as episodes from './episodes';
import * as spinner from './spinner';
import * as error from './error';
import * as searchedParam from './searchedParam';

export const reducers = combineReducers({
  episodes: episodes.reducer,
  searchedParam: searchedParam.reducer,  
  spinner: spinner.reducer,
  error: error.reducer
})

export const initialState = {
  episodes: episodes.initialState,
  searchedParam: searchedParam.initialState,
  spinner: spinner.initialState,
  error: error.initialState
}

export default reducers;