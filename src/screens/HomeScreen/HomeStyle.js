import {Colors} from '../../constants/Colors';
import {StyleSheet} from 'react-native';
import {Fonts} from '../../constants/Fonts';

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
  loading: {
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    fontSize: 14,
    color: Colors.WHITE,
    alignItems: 'center',
  },
});
