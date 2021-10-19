import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  commentContent: {
    paddingTop: 2,
    paddingBottom: 6,
  },
  commentText: {
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    color: Colors.PERIWINKLE_KRAIOLA,
  },
  imageContainer: {
    width: 54,
    marginTop: 2,
  },
  iamge: {
    resizeMode: 'cover',
  },
});
