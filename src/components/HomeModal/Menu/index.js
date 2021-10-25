import {Menu} from './Menu';
import {connect} from 'react-redux';
import {getFriends} from '../../../store/actions/friendsAction';
import {getGroup} from '../../../store/actions/groupActions';
import {getSelfInf} from '../../../store/actions/selfInfAction';
import {getGallery} from '../../../store/actions/galleryActions';
import {getSearch} from '../../../store/actions/searchAction';

const mapStateToProps = state => ({
  loader: state.loader.loader,
  auth: state.auth,
  selfInf: state.selfInf,
});

const mapDispatchToProps = dispatch => {
  return {
    getFriends: auth => dispatch(getFriends(auth)),
    getGroup: auth => dispatch(getGroup(auth)),
    getSelfInf: auth => dispatch(getSelfInf(auth)),
    getGallery: auth => dispatch(getGallery(auth)),
    getSearch: auth => dispatch(getSearch(auth)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
