import {Auth} from './Auth';
import {connect} from 'react-redux';
import {auth} from '../../store/actions/authAction';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => {
  return {
    auth: url => dispatch(auth(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
