import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.ULTRAMARINE_BLUE,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 17,
  },
  headerMenu: {},
  headerRigth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 58,
  },
});
