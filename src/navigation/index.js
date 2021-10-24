import {AppNavigator} from './AppNavigator';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
