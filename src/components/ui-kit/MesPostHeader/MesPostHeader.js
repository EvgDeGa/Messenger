import React from 'react';
import {Text, View, Image} from 'react-native';
import Icon from '../../Icon';
import {Colors} from '../../../constants/Colors';
import {styles} from './MesPostheaderStyle';

export const PostHeader = props => {
  return (
    <View style={styles.headerInformation}>
      <Image source={props.data.holderPhoto} />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{props.data.postHolder}</Text>
        <Text style={styles.dateText}>{props.data.postDate}</Text>
      </View>
    </View>
  );
};
