import {Menu} from './Menu';
import {connect} from 'react-redux';
import {getFriends} from '../../../store/actions/friendsAction';
import {getGroup} from '../../../store/actions/groupActions';
import {getSelfInf} from '../../../store/actions/selfInfAction';

const mapStateToProps = state => ({
  auth: state.auth,
  selfInf: state.selfInf,
});

const mapDispatchToProps = dispatch => {
  return {
    getFriends: friends => dispatch(getFriends(friends)),
    getGroup: group => dispatch(getGroup(group)),
    getSelfInf: selfInf => dispatch(getSelfInf(selfInf)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
