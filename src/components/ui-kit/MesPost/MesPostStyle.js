import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postContent: {
    paddingTop: 16,
    paddingBottom: 19,
  },

  textPost: {
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    color: Colors.PERIWINKLE_KRAIOLA,
    fontSize: 12,
    lineHeight: 24,
  },
  spaceBetwennContent: {
    height: 10,
  },
  slide: {
    height: 202,
  },
  imageContainer: {},
  imagePost: {
    resizeMode: 'contain',
    height: 180,
    maxHeight: 180,
  },
  footerLine: {
    marginTop: 15,
    marginBottom: 24,
    borderTopWidth: 2,
    borderColor: Colors.PURPLE_BLUE,
  },
  dot: {
    backgroundColor: Colors.PEARL_PURPLE,
    width: 6,
    height: 6,
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
  },
  activeDot: {
    backgroundColor: Colors.LEMON_YELLOW,
    width: 6,
    height: 6,
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
  },
});
