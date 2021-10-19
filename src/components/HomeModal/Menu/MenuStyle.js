import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centralView: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
  },
  press: {
    height: '100%',
    width: '100%',
  },
  container: {
    width: 300,
    backgroundColor: Colors.ULTRAMARINE_BLUE,
    paddingHorizontal: 16,
    height: '100%',
  },
  personalInformation: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 19,
    paddingTop: 29,
  },
  profileImage: {
    width: 71,
    height: 71,
  },
  textContainer: {
    paddingLeft: 20,
  },
  name: {
    fontFamily: Fonts.HK_GROTESK_BOLD,
    color: Colors.WHITE,
    fontSize: 14,
    lineHeight: 16,
  },
  link: {
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    color: Colors.PEARL_PURPLE,
    fontSize: 12,
    lineHeight: 16,
  },
  menuList: {},
  item: {
    paddingTop: 50,
  },
});
