import {combineReducers} from 'redux';
import * as episodes from './episodes';
import * as searchedParam from './searchedParam';

export const reducers = combineReducers({
  episodes: episodes.reducer,
  searchedParam: searchedParam.reducer
})

export const initialState = {
  episodes: episodes.initialState,
  searchedParam: searchedParam.initialState
}

export default reducers;