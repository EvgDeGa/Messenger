import React, {useState} from 'react';
import {Image, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Colors} from '../../../constants/Colors';
import styles from './MesCommentStyle';
import CommentContent from '../MesCommentContent';
import Icon from '../../Icon';

export const Comment = ({item}) => {
  const [selectedId, setSelectedId] = useState(null);

  const subCommentPadding = item.parent ? 53 : 0;
  const imageSize = item.parent ? 30 : 43;

  const renderItem = ({item}) => {
    return <Comment item={item} reply={() => onPress} />;
  };

  return (
    <View style={[styles.commentContainer, {paddingLeft: subCommentPadding}]}>
      <View style={styles.commentItem}>
        <View style={styles.image}>
          <Image
            style={{width: imageSize, height: imageSize}}
            source={require('../../../../src/assets/img/ProfileImage.png')}
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
          <TouchableOpacity onPress={() => console.log('like')}>
            <Icon name={'Like'} size={16} color={Colors.WHITE} />
          </TouchableOpacity>
          <Text style={styles.likeText}>{item.like}</Text>
        </View>
      </View>
      {item.reply && item.reply.length ? (
        <FlatList
          data={item.reply}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      ) : null}
    </View>
  );
};
