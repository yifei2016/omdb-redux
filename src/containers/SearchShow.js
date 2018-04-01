import {connect} from 'react-redux';
import {
  addEpisode, setEpisodes, searchEpisodes, displaySpinner, hideSpinner,
  showError, emptyEpisode
} from 'redux/actions';
import SearchShow from 'components/SearchShow';

const mapDispatchToProps = dispatch => {
  return {
    addEpisode: (episode) => {
      dispatch(addEpisode(episode));
    },
    setEpisodes: (episodes) => { 
      dispatch(setEpisodes(episodes));
    },
    searchEpisodes: (show) => { 
      dispatch(searchEpisodes(show));
    },
    showError: (error) => { 
      dispatch(showError(error));
    }
  }
}

export default connect(undefined, mapDispatchToProps)(SearchShow);
