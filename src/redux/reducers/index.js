import {combineReducers} from 'redux';
import episodes from './episodes';
import spinner from './spinner';
import error from './error';
import searchedShow from './searchedShow';

const TvShow = combineReducers({
  episodes,
  searchedShow,
  spinner,
  error
})

export default TvShow;