import React, {useState} from 'react';
import Swiper from 'react-native-swiper';
import {Text, TouchableOpacity, View, Image} from 'react-native';

import {styles} from './MesPostStyle';
import {Colors} from '../../../constants/Colors';

import Icon from '../../Icon';
import PostFooter from '../MesPostFooter';
import PostHeader from '../MesPostHeader';

export const Post = props => {
  const [photo, setPhoto] = useState(
    props.postPhoto.filter(photo => photo.postId == props.postInformation.id),
  );

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
            return (
              <View key={new Date().getTime()} style={styles.imageContainer}>
                <Image style={styles.imagePost} source={photoItem.photo} />
              </View>
            );
          })}
        </Swiper>
      );
    }
    if (photo.length == 1) {
      return (
        <View style={styles.imageContainer}>
          <Image style={styles.imagePost} source={photo[0].photo} />
        </View>
      );
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={props.onPress}>
          <PostHeader data={props.postInformation} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name={'DotsVertical'} color={Colors.PEARL_PURPLE} size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.postContent}>
        {props.postInformation.postText ? (
          <Text style={[styles.textPost]}>
            {props.postInformation.postText}
          </Text>
        ) : null}
        {photo && props.postInformation.postText ? (
          <View style={styles.spaceBetwennContent} />
        ) : null}
        {photo ? photoSwiper() : null}
      </View>
      <PostFooter
        postId={props.postInformation.id}
        like={props.postInformation.like}
        onOpen={props.onPress}
      />
      <View style={styles.footerLine} />
    </View>
  );
};
