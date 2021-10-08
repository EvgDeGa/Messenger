import React from 'react';
import {Text, View} from 'react-native';
import styles from './MestextWithNumberStyle';

export const TextWithNumber = ({text, number}) => {
  function modNumber(number) {
    let numLength = String(number).length;
    let buffer = String(number);
    if (numLength > 3) {
      let modNumber = '';
      for (let i = 0; i < ~~(numLength / 3); i++) {
        modNumber =
          ',' +
          buffer.slice(numLength - 3 * (i + 1), numLength - 3 * i) +
          modNumber;
      }
      if (numLength % 3 == 0) {
        modNumber = modNumber.slice(1);
      } else {
        modNumber =
          buffer.slice(0, numLength - 3 * ~~(numLength / 3)) + modNumber;
      }
      return modNumber;
    } else {
      return buffer;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{modNumber(number)}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
