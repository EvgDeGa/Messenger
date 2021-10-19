import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    justifyContent: 'center',
  },
  text: {
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    paddingLeft: 9,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
