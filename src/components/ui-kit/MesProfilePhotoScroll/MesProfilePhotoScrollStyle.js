import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 3,
    width: (Dimensions.get('window').width - 38) / 3,
    height: (Dimensions.get('window').width - 38) / 3,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
});
