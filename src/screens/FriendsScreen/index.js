import {Friends} from './Friends';
import {connect} from 'react-redux';
import {getFriends} from '../../store/actions/friendsAction';

const mapStateToProps = state => ({
  friends: state.friends,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => {
  return {
    getFriends: friends => dispatch(getFriends(friends)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
