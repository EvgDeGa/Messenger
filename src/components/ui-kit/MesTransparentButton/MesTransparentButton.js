import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './MesTransparentButtonStyle';

export const TransparentButton = ({text, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
