import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 17,
    marginBottom: 4,
  },
  backButton: {
    width: 22,
  },
  headerText: {
    fontFamily: Fonts.HK_GROTESK_BOLD,
    fontSize: 16,
    color: Colors.WHITE,
  },
});
