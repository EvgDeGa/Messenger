import React from 'react';
import {Text, View, Image} from 'react-native';

import {styles} from './MesPersonInListStyle';

export const PersonInList = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.item.photo}} />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{props.item.name}</Text>
        <Text style={styles.cityText}>{props.item.description} </Text>
      </View>
    </View>
  );
};
