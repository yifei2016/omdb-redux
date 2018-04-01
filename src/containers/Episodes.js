import {connect} from 'react-redux';
import Episodes from 'components/Episodes';

const mapStateToProps = state => {
  return {
    episodes: state.episodes,
    searchEpisodes: state.searchEpisodes,
    searchedParam: state.searchedParam,
    spinner: state.spinner,
    error: state.error
  }
}
export default connect(mapStateToProps, undefined)(Episodes);

