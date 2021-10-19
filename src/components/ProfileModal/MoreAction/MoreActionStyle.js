import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centralView: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
  menu: {
    backgroundColor: Colors.ULTRAMARINE_BLUE,
    paddingHorizontal: 16,
  },
  item: {
    paddingVertical: 16,
  },
  line: {
    borderTopWidth: 1,
    borderColor: Colors.PURPLE_BLUE,
  },
  cancel: {
    backgroundColor: Colors.ULTRAMARINE_BLUE,
    borderRadius: 15,
    marginTop: 10,
    paddingVertical: 17,
  },
  cancelText: {
    fontFamily: Fonts.HK_GROTESK_BOLD,
    fontSize: 16,
    textAlign: 'center',
    color: Colors.WHITE,
  },
});
