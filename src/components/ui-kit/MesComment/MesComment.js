import React, {useState} from 'react';
import {Image, View, Text, FlatList, TouchableOpacity} from 'react-native';

import {styles} from './MesCommentStyle';
import {Colors} from '../../../constants/Colors';

import Icon from '../../Icon';
import CommentContent from '../MesCommentContent';

export const Comment = props => {
  const item = props.item;
  const [selectedId, setSelectedId] = useState(null);
  const subCommentPadding = props.padding ? 53 : 0;
  const imageSize = props.padding ? 30 : 43;
  const imageRadius = props.padding ? 15 : 22;

  //
  // console.log('item.attachments', item.thread);

  const returnAtt = () => {
    if (item.attachments) {
      return item.attachments;
    } else {
      return [];
    }
  };

  const returnItem = () => {
    if (item.thread.count > 0) {
      // console.log('1');
      return (
        <View>
          {item.thread.items.map(comment => {
            // console.log('qqqwert', props.commentList.profiles);
            // console.log('1qqqwert', comment.from_id);

            return (
              <Comment
                {...props}
                profile={props.commentList.profiles.filter(
                  profile => comment.from_id == profile.id,
                )}
                item={comment}
                padding={true}
              />
            );
          })}
        </View>
      );
    } else {
      return null;
    }
  };
  return (
    <View style={[styles.commentContainer, {paddingLeft: subCommentPadding}]}>
      <View style={styles.commentItem}>
        <View style={styles.image}>
          <Image
            style={{
              width: imageSize,
              height: imageSize,
              borderRadius: imageRadius,
            }}
            source={{uri: props.profile[0].photo_50}}
          />
        </View>
        <View style={styles.commentBody}>
          <Text style={styles.nameText}>
            {props.profile[0].first_name} {props.profile[0].last_name}
          </Text>
          <CommentContent text={item.text} attachments={returnAtt()} />
          <View style={styles.buttonDate}>
            <Text style={styles.dateText}>{item.date}</Text>
            <TouchableOpacity
              onPress={() =>
                props.setReplyToComment(item.id, props.profile[0].first_name)
              }>
              <Text style={styles.replyButton}>Ответить</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.likeContainer}>
          <TouchableOpacity
            onPress={() =>
              props.likeComment(
                props.auth,
                props.item.likes.user_likes,
                props.item.from_id,
                props.item.id,
              )
            }>
            <Icon name={'Like'} size={16} color={Colors.WHITE} />
          </TouchableOpacity>
          <Text style={styles.likeText}>{item.likes.count}</Text>
        </View>
      </View>
      <View>{item.thread ? returnItem() : null}</View>
    </View>
  );
};
