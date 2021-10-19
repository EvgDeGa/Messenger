import Profile from './Profile';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  data: state,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
