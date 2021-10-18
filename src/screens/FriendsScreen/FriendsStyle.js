import {StyleSheet} from 'react-native';

import {Fonts} from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    backgroundColor: Colors.ULTRAMARINE_BLUE,
  },

  footerBlock: {
    width: '100%',
    height: 45,
    backgroundColor: Colors.SAPPHIRE_BLUE,
  },
});
