import {connect} from 'react-redux';
import Episodes from 'components/Episodes';

const mapStateToProps = state => {
  return {
    episodes: state.episodes
  }
}
export default connect(mapStateToProps, undefined)(Episodes);

