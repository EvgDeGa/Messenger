import React from 'react';
import {Text, View} from 'react-native';
import Icon from '../../Icon';
import styles from './MesIconWithDecriptionStyle';

export const IconWithDescription = ({iconColor, icon, text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name={icon} size={20} color={iconColor} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};
