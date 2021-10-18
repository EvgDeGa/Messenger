import React from 'react';
import {Text, View, Image} from 'react-native';
import Icon from '../../Icon';
import {styles} from './MesPersonInListStyle';

export const PersonInList = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.item.profilePhoto} />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{props.item.name}</Text>
        <Text style={styles.cityText}>{props.item.city}</Text>
      </View>
    </View>
  );
};
