import {Post} from './MesPost';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  selfInf: state.selfInf,
  postPhoto: state.postPhoto,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
