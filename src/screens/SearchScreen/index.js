import {Search} from './Search';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  friends: state.friends.items.map(function (element) {
    return {
      id: element.id,
      name: element.first_name + ' ' + element.last_name,
      description: element.city ? element.city.title : null,
      photo: element.photo_50,
    };
  }),
  group: state.group.items.map(function (element) {
    return {
      id: 'group' + element.id,
      name: element.name,
      description: element.screen_name,
      photo: element.photo_50,
    };
  }),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
