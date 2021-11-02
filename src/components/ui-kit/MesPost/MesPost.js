import React from 'react';
import Swiper from 'react-native-swiper';
import {Text, TouchableOpacity, View, Image} from 'react-native';

import {styles} from './MesPostStyle';
import {Colors} from '../../../constants/Colors';

import Icon from '../../Icon';
import PostFooter from '../MesPostFooter';
import PostHeader from '../MesPostHeader';

export const Post = props => {
  let photo;
  if (props.post.attachments) {
    photo = props.post.attachments.filter(item => item.type == 'photo');
  } else {
  }
  // console.log('sd ', props.post);

  const photoSwiper = () => {
    if (photo.length > 1) {
      return (
        <Swiper
          style={styles.slide}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          paginationStyle={{
            bottom: 0,
          }}>
          {photo.map(photoItem => {
            const photo = photoItem.photo.sizes.filter(
              size => size.type == 'p',
            );
            return (
              <View key={new Date().getTime()} style={styles.imageContainer}>
                <Image
                  style={styles.imagePost}
                  source={{
                    uri: photo[0].url,
                  }}
                />
              </View>
            );
          })}
        </Swiper>
      );
    }
    if (photo.length == 1) {
      return (
        <View style={styles.imageContainer}>
          <Image
            style={styles.imagePost}
            source={{
              uri: photo[0].photo.sizes[0].url,
            }}
          />
        </View>
      );
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            props.addComment(
              props.auth,
              props.post.post_id,
              props.post.source_id,
            );
            props.onPress();
          }}>
          <PostHeader
            group={props.group.length ? props.group[0] : false}
            profile={props.profile.length ? props.profile[0] : false}
            date={props.post.date}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name={'DotsVertical'} color={Colors.PEARL_PURPLE} size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.postContent}>
        {props.post.text ? (
          <Text style={[styles.textPost]}>{props.post.text}</Text>
        ) : null}
        {photo && props.post.text ? (
          <View style={styles.spaceBetwennContent} />
        ) : null}
        {photo.length ? photoSwiper() : null}
      </View>
      <PostFooter
        post={props.post}
        onOpen={() => {
          props.onPress();
          props.addComment(
            props.auth,
            props.post.post_id,
            props.post.source_id,
          );
        }}
      />
      <View style={styles.footerLine} />
    </View>
  );
};
