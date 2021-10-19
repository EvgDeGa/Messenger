import {Fonts} from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.ULTRAMARINE_BLUE,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 17,
  },
  searchInput: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    paddingHorizontal: 13,
    marginLeft: 21,
    borderRadius: 28,
    backgroundColor: Colors.SAPPHIRE_BLUE,
  },
  input: {
    alignItems: 'center',
    marginLeft: 8,
    color: Colors.WHITE,
  },
  categoryMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  menuPadding: {
    width: 43,
    borderBottomWidth: 1,
    borderColor: Colors.PURPLE_BLUE,
  },
  menuButton: {
    // borderWidth: 1,
  },
  itemText: {
    marginBottom: 7,
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    color: Colors.PEARL_PURPLE,
    fontSize: 14,
  },
  filler: {
    borderBottomWidth: 1,
    borderColor: Colors.PURPLE_BLUE,
    flexGrow: 1,
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemLine: {
    borderBottomWidth: 1,
    marginTop: 1,
    borderColor: Colors.PURPLE_BLUE,
  },
  itemLineCheck: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.WHITE,
  },
  underLine: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.PURPLE_BLUE,
  },
});
