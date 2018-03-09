import {connect} from 'react-redux';
import {addEpisode, setEpisodes, searchedShow, emptyEpisode} from 'redux/actions';
import SearchShow from 'components/SearchShow';

const mapDispatchToProps = dispatch => {
  return {
    addEpisode: (episode) => {
      dispatch(addEpisode(episode));
    },
    setEpisodes: (episodes) => { 
      dispatch(setEpisodes(episodes));
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
