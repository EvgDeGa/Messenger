import {PostFooter} from './MesPostFooter';
import {connect} from 'react-redux';
import {likePost} from '../../../store/actions/postAction';

const mapStateToProps = state => ({
  auth: state.auth,
  commentList: state.commentList,
  postInformation: state.postInformation,
});

const mapDispatchToProps = dispatch => {
  return {
    likePost: (auth, userLikes, ownerId, itemId) =>
      dispatch(likePost(auth, userLikes, ownerId, itemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostFooter);
