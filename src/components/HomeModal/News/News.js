import React, {useState} from 'react';
import {
  Image,
  View,
  Modal,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

import IconWithDescription from '../../ui-kit/MesIconWithDescription';
import {Colors} from '../../../constants/Colors';
import {styles} from './NewsStyle';
import BackHeader from '../../ui-kit/MesBackHeader';
import PostHeader from '../../ui-kit/MesPostHeader';
import CommentList from '../../ui-kit/MesCommentList';
import Icon from '../../Icon';
import numberWithComma from '../../Functions/numberWithComma';

export const News = ({visible, item, onCancel}) => {
  const [selectedId, setSelectedId] = useState(null);

  function numberOfComments(item) {
    if (item.commentList) {
      let number = 0;
      for (let i = 0; i < item.commentList.length; i++) {
        number += item.commentList[i].reply.length;
      }
      return item.commentList.length + number;
    }
    return 0;
  }

  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.centralView} onPress={onCancel}>
        <BackHeader back={() => onCancel()} text={'Запись'} />
        <ScrollView>
          <PostHeader data={item} />
          <View style={styles.content}>
            {item.postPhoto
              ? item.postPhoto.map(postPhoto => {
                  return (
                    <View style={styles.imageContainer}>
                      <Image style={styles.image} source={postPhoto.photo} />
                    </View>
                  );
                })
              : null}
            {item.postText ? (
              <Text style={styles.text}>{item.postText}</Text>
            ) : null}
          </View>
          <View style={styles.interactionBlock}>
            <View style={styles.like}>
              <Icon name={'Like'} color={Colors.WHITE} size={20} />
              <Text style={styles.likeText}>{numberWithComma(item.like)}</Text>
            </View>

            <Icon name={'Bookmark'} size={18} color={Colors.WHITE} />
          </View>

          <Text style={styles.numberOfComment}>
            {numberOfComments(item)}
            {' комментариев'}
          </Text>
          <View style={styles.line} />
          {item.commentList ? (
            <CommentList commentList={item.commentList} />
          ) : null}
        </ScrollView>
        <View style={styles.inputContainer}>
          <View style={styles.commentInput}>
            <TextInput
              style={styles.input}
              onChangeText={text => findItem(text)}
              placeholder="Комментарий"
              placeholderTextColor={Colors.PEARL_PURPLE}
              underlineColorAndroid="rgba(0,0,0,0)"
            />
          </View>
          <Icon name={'PaperAirplane'} color={Colors.WHITE} size={22} />
        </View>
      </View>
    </Modal>
  );
};
