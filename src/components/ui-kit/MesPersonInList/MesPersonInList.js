import React from 'react';
import {Text, View, Image} from 'react-native';

import {styles} from './MesPersonInListStyle';

export const PersonInList = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.item.photo_50}} />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>
          {props.item.first_name}
          {props.item.last_name}
        </Text>
        <Text style={styles.cityText}>
          {props.item.city ? props.item.city.title : null}
        </Text>
      </View>
    </View>
  );
};
