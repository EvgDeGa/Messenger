import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './MesBackHeaderStyle';
import {Colors} from '../../../constants/Colors';

import Icon from '../../Icon';

export const BackHeader = ({back, text}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0}
        onPress={() => back()}>
        <Icon name={'ArrowLeft'} color={Colors.WHITE} size={22} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{text}</Text>
      <View style={styles.backButton} />
    </View>
  );
};
