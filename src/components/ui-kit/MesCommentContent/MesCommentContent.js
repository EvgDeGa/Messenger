import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './MesCommetContentStyle';

export const CommentContent = ({text, image}) => {
  return (
    <View style={styles.commentContent}>
      {text ? <Text style={styles.commentText}>{text}</Text> : null}
      {image ? (
        <View style={styles.imageContainer}>
          <Image style={styles.iamge} source={image} />
        </View>
      ) : null}
    </View>
  );
};
