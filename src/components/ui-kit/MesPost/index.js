import {Post} from './MesPost';
import {connect} from 'react-redux';
import {addComment} from '../../../store/actions/commentAction';

const mapStateToProps = state => ({
  auth: state.auth,
  selfInf: state.selfInf,
});

const mapDispatchToProps = dispatch => {
  return {
    addComment: (auth, postId, ownerId) =>
      dispatch(addComment(auth, postId, ownerId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
