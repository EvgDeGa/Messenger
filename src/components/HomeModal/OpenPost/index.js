import {OpenPost} from './OpenPost';
import {connect} from 'react-redux';
import {addComment, l} from '../../../store/actions/commentAction';
import {likePost} from '../../../store/actions/postAction';

const mapStateToProps = state => ({
  selfInf: state.selfInf,
  postInformation: state.postInformation,
});

const mapDispatchToProps = dispatch => {
  return {
    addComment: (text, selfInf, postId) =>
      dispatch(addComment(text, selfInf, postId)),
    likePost: (like, id) => dispatch(likePost(like, id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OpenPost);
