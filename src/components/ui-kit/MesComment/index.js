import {Comment} from './MesComment';
import {connect} from 'react-redux';
import {likeComment} from '../../../store/actions/commentAction';

const mapStateToProps = state => ({
  commentList: state.commentList,
  postInformation: state.postInformation,
});

const mapDispatchToProps = dispatch => {
  return {
    likeComment: (like, id, parent) => dispatch(likeComment(like, id, parent)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
