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
  detailsContainer: {
    backgroundColor: Colors.ULTRAMARINE_BLUE,
    paddingHorizontal: 16,
    paddingTop: 13,
    paddingBottom: 53,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
  },
  profileInformation: {
    paddingBottom: 20,
  },
  closeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.HK_GROTESK_REGULAR,
    color: Colors.WHITE,
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 20,
    paddingBottom: 10,
  },
  item: {
    paddingTop: 20,
  },
  line: {
    borderTopWidth: 1,
    borderColor: Colors.PURPLE_BLUE,
  },
});
