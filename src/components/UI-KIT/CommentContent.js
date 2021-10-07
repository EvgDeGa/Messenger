import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';
import { ProfileImage } from './ProfileImage';
import Icon from '../Icon/icon';
import { Comment } from './Comment';




export const CommentContent = ({text, image}) => {
  return (
    <View style={styles.commentContent}>
        {text ? <Text style={styles.commentText}>{text}</Text> : null}
        {image ? <Image style={{width: 54, marginTop: 2}} source={image}/> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  commentContent:{
    paddingTop: 2,
    paddingBottom: 6
  },
  commentText:{
      fontFamily: Fonts.HK_Grotesk_Medium,
      fontSize: 12,
      lineHeight: 16,
      color: Colors.purple_02
    },
  });
