import {Home} from './Home';
import {connect} from 'react-redux';
import {getSelfInf} from '../../store/actions/selfInfAction';
import {getPost} from '../../store/actions/postAction';

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts,
  loader: state.loader.loader,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSelfInf: auth => dispatch(getSelfInf(auth)),
    getPost: auth => dispatch(getPost(auth)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
