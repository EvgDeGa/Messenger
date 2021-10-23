import {Menu} from './Menu';
import {connect} from 'react-redux';
import {getFriends} from '../../../store/actions/friendsAction';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => {
  return {
    getFriends: friends => dispatch(getFriends(friends)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
