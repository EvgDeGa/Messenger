import {Menu} from './Menu';
import {connect} from 'react-redux';
import {getFriends} from '../../../store/actions/friendsAction';
import {getGroup} from '../../../store/actions/groupActions';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => {
  return {
    getFriends: friends => dispatch(getFriends(friends)),
    getGroup: group => dispatch(getGroup(group)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
