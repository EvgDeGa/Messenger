import {Auth} from './Auth';
import {connect} from 'react-redux';
import {auth} from '../../store/actions/authAction';
import {showLoader} from '../../store/actions/loaderAction';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => {
  return {
    auth: url => dispatch(auth(url)),
    showLoader: () => dispatch(showLoader()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
