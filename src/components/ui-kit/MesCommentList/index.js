import {CommentList} from './MesCommentList';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  commentList: state.commentList,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
