import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {styles} from './MesPostFooterStyle';
import {Colors} from '../../../constants/Colors';

import Icon from '../../Icon';
import numberWithComma from '../../Functions/numberWithComma';
import numberOfComments from '../../Functions/numberOfComments';

export const PostFooter = props => {
  const [comments, setComments] = useState(
    props.replyComment
      .filter(comment => comment.postId == props.postId)
      .concat(
        props.commentList.filter(comment => comment.postId == props.postId),
      ),
  );

  console.log(comments.length);
  return (
    <View style={styles.container}>
      <View style={styles.likeComment}>
        <View style={styles.like}>
          <TouchableOpacity>
            <Icon name={'Like'} color={Colors.WHITE} size={20} />
          </TouchableOpacity>
          <Text style={styles.text}>{numberWithComma(props.like)}</Text>
        </View>
        {comments.length ? (
          <View style={styles.comment}>
            <TouchableOpacity onPress={() => props.onOpen()}>
              <Icon name={'Chat'} color={Colors.WHITE} size={20} />
            </TouchableOpacity>
            <Text style={styles.text}>{comments.length}</Text>
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
