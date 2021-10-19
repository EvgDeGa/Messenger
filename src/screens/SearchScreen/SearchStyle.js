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
    flexDirection: 'column',
  },
  textContainer: {
    paddingHorizontal: 43,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    marginBottom: 7,
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    color: Colors.PEARL_PURPLE,
    fontSize: 14,
  },
  lineContainer: {
    paddingHorizontal: 39,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemLine: {
    borderWidth: 1,
    borderRadius: 12,
    width: 100,

    borderColor: Colors.WHITE,
  },
  underLine: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.PURPLE_BLUE,
  },
});
