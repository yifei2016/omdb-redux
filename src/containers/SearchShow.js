import {connect} from 'react-redux';
import {addEpisode, searchedShow, emptyEpisode} from 'redux/actions';
import SearchShow from 'components/SearchShow';

const mapDispatchToProps = dispatch => {
  return {
    addEpisode: (episode) => {
      dispatch(addEpisode(episode));
    },
    searchedShow: (show) => { 
      dispatch(searchedShow(show));
    },
    emptyEpisode: () => { 
      dispatch(emptyEpisode());
    }
  }
}

export default connect(undefined, mapDispatchToProps)(SearchShow);
