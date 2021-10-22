import {PostFooter} from './MesPostFooter';
import {connect} from 'react-redux';
import {likePost} from '../../../store/actions/postAction';

const mapStateToProps = state => ({
  commentList: state.commentList,
  postInformation: state.postInformation,
});

const mapDispatchToProps = dispatch => {
  return {likePost: (like, id) => dispatch(likePost(like, id))};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostFooter);
