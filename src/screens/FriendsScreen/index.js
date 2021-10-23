import {Friends} from './Friends';
import {connect} from 'react-redux';
import {getFriends} from '../../store/actions/friendsAction';

const mapStateToProps = state => ({
  friends: state.friends.items.map(function (element) {
    return {
      id: element.id,
      name: element.first_name + ' ' + element.last_name,
      description: element.city ? element.city.title : null,
      photo: element.photo_50,
    };
  }),
  auth: state.auth,
});

const mapDispatchToProps = dispatch => {
  return {
    getFriends: friends => dispatch(getFriends(friends)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
