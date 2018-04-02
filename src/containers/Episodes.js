import {connect} from 'react-redux';
import Episodes from 'components/Episodes';

const mapStateToProps = state => {
  return {
    episodes: state.episodes, // {loading: false, data: [], error: null};
    searchEpisodes: state.searchEpisodes,
    searchedParam: state.searchedParam
  }
}
export default connect(mapStateToProps, undefined)(Episodes);

