import {Home} from './Home';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  selfInf: state.selfInf,
  postInformation: state.postInformation,
  postPhoto: state.postPhoto,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
