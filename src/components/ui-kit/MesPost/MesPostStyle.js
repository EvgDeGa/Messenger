import {Fonts} from '../../../constants/Fonts';
import {Colors} from '../../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  postContent: {
    paddingTop: 16,
    paddingBottom: 19,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  imageContainer: {},

  imagePost: {
    width: '100%',
    resizeMode: 'stretch',
  },
  footerLine: {
    marginTop: 15,
    marginBottom: 24,
    borderTopWidth: 2,
    borderColor: Colors.PURPLE_BLUE,
  },
});
