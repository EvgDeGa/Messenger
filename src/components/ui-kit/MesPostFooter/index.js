import {PostFooter} from './MesPostFooter';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  replyComment: state.replyComment,
  commentList: state.commentList,
  postInformation: state.postInformation,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostFooter);
