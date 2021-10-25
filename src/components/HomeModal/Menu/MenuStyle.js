import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centralView: {
    backgroundColor: Colors.BlACKOUT,
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
  photoLoader: {
    borderRadius: 36,
    backgroundColor: 'grey',
    width: 71,
    height: 71,
  },
  profileImage: {
    borderRadius: 36,
    width: 71,
    height: 71,
  },
  textContainer: {
    paddingLeft: 20,
  },
  nameLoader: {
    marginBottom: 10,
    height: 16,
    width: 100,
    backgroundColor: 'grey',
    borderRadius: 8,
  },
  linkloader: {
    height: 16,
    width: 40,
    backgroundColor: 'grey',
    borderRadius: 8,
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
