import Profile from './Profile';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  loader: state.loader.loader,
  selfInf: state.selfInf,
  gallary: state.gallary,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
