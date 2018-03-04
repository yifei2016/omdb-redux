import {connect} from 'react-redux';
import {addEpisode} from 'redux/actions';
import SearchShow from 'components/SearchShow';

const mapDispatchToProps = dispatch => {
  return {
    addEpisode: (episode) => {
      dispatch(addEpisode(episode));
    }
  }
}


export default connect(undefined, mapDispatchToProps)(SearchShow);
