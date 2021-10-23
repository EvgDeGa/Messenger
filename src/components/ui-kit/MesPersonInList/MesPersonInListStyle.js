import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
  },

  image: {
    borderRadius: 22,
    width: 43,
    height: 43,
  },
  textContainer: {
    paddingLeft: 10,
  },
  nameText: {
    fontFamily: Fonts.HK_GROTESK_BOLD,
    fontSize: 14,
    lineHeight: 16,
    color: Colors.WHITE,
  },
  cityText: {
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    color: Colors.PEARL_PURPLE,
  },
});
