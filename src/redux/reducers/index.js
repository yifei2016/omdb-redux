import {combineReducers} from 'redux';
import episodes from './episodes';
import searchedShow from './searchedShow';

const TvShow = combineReducers({
  episodes,
  searchedShow
})

export default TvShow;