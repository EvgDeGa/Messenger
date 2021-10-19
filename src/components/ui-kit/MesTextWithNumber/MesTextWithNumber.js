import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './MestextWithNumberStyle';

import numberWithComma from '../../Functions/numberWithComma';

export const TextWithNumber = ({text, number}) => {
  return (
    <View>
      <Text style={styles.number}>{numberWithComma(number)}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
