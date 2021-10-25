import {Fonts} from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: Colors.ULTRAMARINE_BLUE,
  },
  profileInformation: {
    paddingHorizontal: 16,
  },
  profileInformation_firstLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    paddingTop: 20,
  },
  personalInformation: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30,
  },
  profileImage: {
    borderRadius: 47,
    width: 95,
    height: 95,
  },
  name: {
    fontFamily: Fonts.HK_GROTESK_BOLD,
    color: Colors.WHITE,
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 17,
  },
  link: {
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    color: Colors.PEARL_PURPLE,
    fontSize: 12,
    lineHeight: 16,
    paddingTop: 6,
  },
  countryCity: {
    fontFamily: Fonts.HK_Grotesk_Medium,
    color: Colors.PEARL_PURPLE,
    fontSize: 14,
    lineHeight: 16,
    paddingTop: 28,
  },
  workpalce: {
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    color: Colors.WHITE,
    fontSize: 14,
    lineHeight: 20,
    paddingTop: 9,
  },
  profileInformation_secondLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingTop: 24,
    paddingBottom: 30,
  },
  line: {
    marginHorizontal: 16,
    borderTopWidth: 1,
    borderColor: Colors.PURPLE_BLUE,
  },
  gallery: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  gallery_Text: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  photoText: {
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    color: Colors.WHITE,
    fontSize: 14,
    lineHeight: 20,
    paddingRight: 6,
  },
  photoNumber: {
    fontFamily: Fonts.HK_GROTESK_MEDIUM,
    color: Colors.PEARL_PURPLE,
    fontSize: 14,
    lineHeight: 20,
  },
  footerBlock: {
    width: '100%',
    height: 45,
    backgroundColor: Colors.SAPPHIRE_BLUE,
  },
});
