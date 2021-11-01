import React from 'react';
import {Text, View, Image} from 'react-native';

import {styles} from './MesPostheaderStyle';

export const PostHeader = props => {
  var photo;
  // console.log(props.group);
  if (props.group) {
    photo = props.group.photo_50;
  } else {
    photo = props.profile.photo_50;
  }

  return (
    <View style={styles.headerInformation}>
      <Image
        style={styles.image}
        source={{
          uri: photo,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{props.group.name}</Text>
        <Text style={styles.dateText}>{props.date}</Text>
      </View>
    </View>
  );
};
