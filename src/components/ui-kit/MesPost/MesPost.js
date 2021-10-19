import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import PostHeader from '../MesPostHeader';
import {styles} from './MesPostStyle';
import PostFooter from '../MesPostFooter';
import Icon from '../../Icon';
import {Colors} from '../../../constants/Colors';

export const Post = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.container}>
          <PostHeader data={props.data} />
          <Icon name={'DotsVertical'} color={Colors.PEARL_PURPLE} size={20} />
        </View>
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
            <Image
              style={styles.imagePost}
              source={props.data.postPhoto[0].photo}
            />
          </View>
        ) : null}
      </View>
      <PostFooter data={props.data} />
      <View style={styles.footerLine} />
    </View>
  );
};
