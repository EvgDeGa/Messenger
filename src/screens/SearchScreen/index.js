import {Search} from './Search';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  data: state.friends,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
