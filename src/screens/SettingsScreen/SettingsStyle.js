import {Fonts} from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';
import {StyleSheet, Dimensions, FlatList} from 'react-native';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.ULTRAMARINE_BLUE,
  },
  item: {
    paddingBottom: 9,
    paddingTop: 32,
  },
});
