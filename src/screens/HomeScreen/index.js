import {Home} from './Home';
import {connect} from 'react-redux';
import {getSelfInf} from '../../store/actions/selfInfAction';

const mapStateToProps = state => ({
  auth: state.auth,
  postInformation: state.postInformation,
  postPhoto: state.postPhoto,
});

const mapDispatchToProps = dispatch => {
  return {
    getSelfInf: auth => dispatch(getSelfInf(auth)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
