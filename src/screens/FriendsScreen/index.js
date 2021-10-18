import {Friends} from './Friends';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  data: state.friends,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
