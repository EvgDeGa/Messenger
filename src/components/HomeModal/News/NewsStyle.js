import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  centralView: {
    backgroundColor: Colors.ULTRAMARINE_BLUE,
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 16,
    height: '100%',
  },
  content: {
    paddingVertical: 14,
  },
  imageContainer: {
    paddingVertical: 2,
  },
  image: {
    width: '100%',
    resizeMode: 'stretch',
  },
  text: {
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    color: Colors.PERIWINKLE_KRAIOLA,
    marginVertical: 2,
  },
  interactionBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  like: {
    width: 90,
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    fontFamily: Fonts.HK_GROTESK_SEMIBOLD,
    color: Colors.WHITE,
    fontSize: 14,
    marginLeft: 11,
  },
  numberOfComment: {
    fontFamily: Fonts.HK_GROTESK_BOLD,
    fontSize: 14,
    lineHeight: 16,
    color: Colors.WHITE,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: Colors.PURPLE_BLUE,
    marginVertical: 17,
  },
  inputContainer: {
    paddingTop: 4,
    paddingBottom: 27,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentInput: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    marginRight: 21,
    borderRadius: 28,
    backgroundColor: Colors.SAPPHIRE_BLUE,
  },
  input: {
    alignItems: 'center',
    marginLeft: 8,
    color: Colors.WHITE,
  },
});
