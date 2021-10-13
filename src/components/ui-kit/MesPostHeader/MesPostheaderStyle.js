import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerInformation: {
    flexDirection: 'row',
  },
  textContainer: {
    flexDirection: 'column',
    paddingLeft: 8,
  },
  nameText: {
    fontFamily: Fonts.HK_GROTESK_BOLD,
    color: Colors.WHITE,
    fontSize: 14,
    lineHeight: 16,
  },
  dateText: {
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    color: Colors.PEARL_PURPLE,
    fontSize: 12,
    lineHeight: 16,
  },
});
