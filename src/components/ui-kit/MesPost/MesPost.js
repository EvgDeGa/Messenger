import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';

import {styles} from './MesPostStyle';
import {Colors} from '../../../constants/Colors';

import Icon from '../../Icon';
import PostFooter from '../MesPostFooter';
import PostHeader from '../MesPostHeader';

export const Post = props => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={props.onPress}>
          <PostHeader data={props.data} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name={'DotsVertical'} color={Colors.PEARL_PURPLE} size={20} />
        </TouchableOpacity>
      </View>

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
      <PostFooter
        like={props.data.like}
        commentList={props.data.commentList}
        onOpen={props.onPress}
      />
      <View style={styles.footerLine} />
    </View>
  );
};
