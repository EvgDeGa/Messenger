import React, {useState} from 'react';
import {Image, View, Text, FlatList, TouchableOpacity} from 'react-native';

import {styles} from './MesCommentStyle';
import {Colors} from '../../../constants/Colors';

import Icon from '../../Icon';
import CommentContent from '../MesCommentContent';

export const Comment = props => {
  const item = props.item;
  const [selectedId, setSelectedId] = useState(null);
  const subCommentPadding = item.parent ? 53 : 0;
  const imageSize = item.parent ? 30 : 43;

  return (
    <View style={[styles.commentContainer, {paddingLeft: subCommentPadding}]}>
      <View style={styles.commentItem}>
        <View style={styles.image}>
          <Image
            style={{width: imageSize, height: imageSize}}
            source={item.holderPhoto}
          />
        </View>
        <View style={styles.commentBody}>
          <Text style={styles.nameText}>{item.commetHolder}</Text>
          <CommentContent text={item.body} image={item.image} />
          <View style={styles.buttonDate}>
            <Text style={styles.dateText}>{item.date}</Text>
            <TouchableOpacity onPress={() => setSelectedId(item.id)}>
              <Text style={styles.replyButton}>Ответить</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.likeContainer}>
          <TouchableOpacity
            onPress={() => {
              props.likeComment(item.like, item.id, item.parent);
            }}>
            <Icon name={'Like'} size={16} color={Colors.WHITE} />
          </TouchableOpacity>
          <Text style={styles.likeText}>{item.like}</Text>
        </View>
      </View>
      <View>
        {item.reply && item.reply.length
          ? item.reply.map(comment => {
              return <Comment {...props} item={comment} />;
            })
          : null}
      </View>
    </View>
  );
};
