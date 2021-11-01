import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerInformation: {
    flexDirection: 'row',
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
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
