import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './MesCommentListStyle';
import numberOfComments from '../../../utils/Functions/numberOfComments';

import Comment from '../MesComment';

export const CommentList = props => {
  // const comments = props.commentList.filter(
  //  comment => comment.postId == props.postId,
  // );

  function changeText(nCom) {
    const text_forms = [' комментарий', ' комментария', ' комментариев'];
    nCom = Math.abs(nCom) % 100;
    var nCom_ = nCom % 10;
    if (nCom > 10 && nCom < 20) {
      return text_forms[2];
    }
    if (nCom_ > 1 && nCom_ < 5) {
      return text_forms[1];
    }
    if (nCom_ == 1) {
      return text_forms[0];
    }
    return text_forms[2];
  }

  return (
    <View>
      <Text style={styles.numberOfComment}>
        {props.commentList.count}
        {changeText(props.commentList.count)}
      </Text>
      <View style={styles.line} />
      {props.commentList.items.map(comment => {
        return (
          <Comment
            commentList={props.commentList}
            setReplyToComment={(id, name) => props.setReplyToComment(id, name)}
            padding={false}
            profile={props.commentList.profiles.filter(
              profile => comment.from_id == profile.id,
            )}
            item={comment}
            reply={() => onPress}
          />
        );
      })}
    </View>
  );
};
