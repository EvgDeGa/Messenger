import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  commentContainer: {},
  commentItem: {
    flexDirection: 'row',
  },
  image: {
    height: 43,
    justifyContent: 'center',
  },
  commentBody: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 10,
    paddingTop: 4,
    paddingLeft: 10,
    paddingRight: 7,
  },
  nameText: {
    fontFamily: Fonts.HK_GROTESK_SEMIBOLD,
    fontSize: 14,
    lineHeight: 16,
    color: Colors.WHITE,
  },
  buttonDate: {
    flexDirection: 'row',
  },
  dateText: {
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    fontSize: 10,
    lineHeight: 16,
    color: Colors.PEARL_PURPLE,
    marginRight: 20,
  },
  replyButton: {
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    fontSize: 10,
    lineHeight: 16,
    color: Colors.WHITE,
  },
  likeContainer: {
    width: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 24,
  },
  likeText: {
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    color: Colors.WHITE,
  },
});
