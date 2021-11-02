import {OpenPost} from './OpenPost';
import {connect} from 'react-redux';
import {addComment, sendComment} from '../../../store/actions/commentAction';
import {likePost} from '../../../store/actions/postAction';

const mapStateToProps = state => ({
  auth: state.auth,
  selfInf: state.selfInf,
  postInformation: state.postInformation,
});

const mapDispatchToProps = dispatch => {
  return {
    addComment: (auth, postId, ownerId) =>
      dispatch(addComment(auth, postId, ownerId)),
    likePost: (like, id) => dispatch(likePost(like, id)),
    sendComment: (message, replyToComment, auth, postId, ownerId) =>
      dispatch(sendComment(message, replyToComment, auth, postId, ownerId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OpenPost);
