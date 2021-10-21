import Profile from './Profile';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  selfInf: state.selfInf,
  gallary: state.gallary,
  social: state.social,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
