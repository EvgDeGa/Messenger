import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {styles} from './MesPostFooterStyle';
import {Colors} from '../../../constants/Colors';

import Icon from '../../Icon';

export const PostFooter = props => {
  // const comments = props.commentList.filter(
  //   comment => comment.postId == props.postId,
  // );

  return (
    <View style={styles.container}>
      <View style={styles.likeComment}>
        <View style={styles.like}>
          <TouchableOpacity onPress={() => console.log('likepost')}>
            <Icon name={'Like'} color={Colors.WHITE} size={20} />
          </TouchableOpacity>
          <Text style={styles.text}>{props.post.likes.count}</Text>
        </View>
        {props.post.comments.count ? (
          <View style={styles.comment}>
            <TouchableOpacity onPress={() => props.onOpen()}>
              <Icon name={'Chat'} color={Colors.WHITE} size={20} />
            </TouchableOpacity>
            <Text style={styles.text}>{props.post.comments.count}</Text>
          </View>
        ) : null}
      </View>
      <View>
        <TouchableOpacity>
          <Icon name={'Bookmark'} color={Colors.WHITE} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
