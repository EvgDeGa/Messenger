import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './MesCommentContentStyle';

export const CommentContent = ({text, attachments}) => {
  const item = () => {
    switch (attachments[0].type) {
      case 'photo':
        return (
          <View style={styles.imageContainer}>
            <Image
              style={styles.iamge}
              source={{
                uri: attachments[0].photo.sizes.filter(
                  image => image.type == 'm',
                )[0].url,
              }}
            />
          </View>
        );
      case 'sticker':
        return (
          <View style={styles.imageContainer}>
            <Image
              style={styles.iamge}
              source={{
                uri: attachments[0].sticker.images.filter(
                  image => image.height == 64,
                )[0].url,
              }}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.commentContent}>
      {text ? <Text style={styles.commentText}>{text}</Text> : null}
      {attachments.length ? item() : null}
    </View>
  );
};
