import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    borderColor: Colors.PURPLE_BLUE,
    borderWidth: 1,
    borderRadius: 30,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 31,
    paddingRight: 31,

    fontFamily: Fonts.HK_GROTESK_BOLD,
    fontSize: 14,
    lineHeight: 24,
    color: Colors.WHITE,
    textAlign: 'center',
  },
});
