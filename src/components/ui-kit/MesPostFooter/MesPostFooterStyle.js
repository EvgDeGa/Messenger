import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeComment: {
    flexDirection: 'row',
  },
  like: {
    width: 90,
    flexDirection: 'row',
    alignItems: 'center',
  },
  comment: {
    width: 90,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.HK_GROTESK_SEMIBOLD,
    color: Colors.WHITE,
    fontSize: 14,
    marginLeft: 11,
  },
});
