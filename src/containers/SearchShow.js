import {connect} from 'react-redux';
import {addEpisode, setEpisodes, searchedShow, displaySpinner, hideSpinner, showError, emptyEpisode} from 'redux/actions';
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
    },
    displaySpinner: () => { 
      dispatch(displaySpinner());
    },
    hideSpinner: () => { 
      dispatch(hideSpinner());
    },
    showError: (error) => { 
      dispatch(showError(error));
    }
  }
}

export default connect(undefined, mapDispatchToProps)(SearchShow);
