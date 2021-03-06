import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './MesIconWithDecriptionStyle';

import Icon from '../../Icon';

export const IconWithDescription = ({
  iconColor,
  icon,
  text,
  textColor,
  textSize,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name={icon} size={20} color={iconColor} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, {color: textColor, fontSize: textSize}]}>
          {text}
        </Text>
      </View>
    </View>
  );
};
