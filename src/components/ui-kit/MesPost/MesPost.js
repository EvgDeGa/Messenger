import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import PostHeader from '../MesPostHeader';
import {styles} from './MesPostStyle';
import PostFooter from '../MesPostFooter';

export const Post = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <PostHeader data={props.data} />
      </TouchableOpacity>
      <View style={styles.postContent}>
        {props.data.postText ? (
          <Text style={[styles.textPost]}>{props.data.postText}</Text>
        ) : null}
        {props.data.postPhoto && props.data.postText ? (
          <View style={styles.spaceBetwennContent} />
        ) : null}
        {props.data.postPhoto ? (
          <View style={styles.imageContainer}>
            <Image style={styles.imagePost} source={props.data.postPhoto} />
          </View>
        ) : null}
      </View>
      <PostFooter data={props.data} />
      <View style={styles.footerLine} />
    </View>
  );
};
