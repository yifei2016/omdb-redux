import { connect } from 'react-redux';
import { addEpisode, setEpisodes, searchEpisodes, searchEpisodesThunk } from 'redux/actions';
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
    searchEpisodesThunk: (show) => { 
      dispatch(searchEpisodesThunk(show));
    }
  }
}

export default connect(undefined, mapDispatchToProps)(SearchShow);
