import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  numberOfComment: {
    fontFamily: Fonts.HK_GROTESK_BOLD,
    fontSize: 14,
    lineHeight: 16,
    color: Colors.WHITE,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: Colors.PURPLE_BLUE,
    marginVertical: 17,
  },
});
