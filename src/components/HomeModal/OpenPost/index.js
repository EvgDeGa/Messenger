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
    addComment: (text, selfInf, postId) =>
      dispatch(addComment(text, selfInf, postId)),
    likePost: (like, id) => dispatch(likePost(like, id)),
    sendComment: (message, replyToComment, auth, postId, ownerId) =>
      dispatch(sendComment(message, replyToComment, auth, postId, ownerId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OpenPost);
