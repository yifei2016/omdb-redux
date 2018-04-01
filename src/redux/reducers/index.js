import {combineReducers} from 'redux';
import * as episodes from './episodes';
import * as spinner from './spinner';
import * as error from './error';
import * as searchedShow from './searchedShow';

export const reducers = combineReducers({
  episodes: episodes.reducer,
  searchedShow: searchedShow.reducer,  
  spinner: spinner.reducer,
  error: error.reducer
})

export const initialState = {
  episodes: episodes.initialState,
  searchedShow: searchedShow.initialState,
  spinner: spinner.initialState,
  error: error.initialState
}

export default reducers;