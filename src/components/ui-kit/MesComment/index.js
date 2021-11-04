import {Comment} from './MesComment';
import {connect} from 'react-redux';
import {likeComment} from '../../../store/actions/commentAction';

const mapStateToProps = state => ({
  auth: state.auth,
  commentList: state.commentList,
});

const mapDispatchToProps = dispatch => {
  return {
    likeComment: (auth, userLikes, ownerId, itemId) =>
      dispatch(likeComment(auth, userLikes, ownerId, itemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
