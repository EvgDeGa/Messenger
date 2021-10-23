import {Colors} from '../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,

    paddingHorizontal: 16,
    backgroundColor: Colors.ULTRAMARINE_BLUE,
  },

  footerBlock: {
    width: '100%',
    height: 45,
    backgroundColor: Colors.SAPPHIRE_BLUE,
  },
});
