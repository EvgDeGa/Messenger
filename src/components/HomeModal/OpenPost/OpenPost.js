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

import {styles} from './OpenPostStyle';
import {Colors} from '../../../constants/Colors';

import Icon from '../../Icon';
import BackHeader from '../../ui-kit/MesBackHeader';
import PostHeader from '../../ui-kit/MesPostHeader';
import CommentList from '../../ui-kit/MesCommentList';
import numberWithComma from '../../Functions/numberWithComma';
import numberOfComments from '../../Functions/numberOfComments';

export const OpenPost = ({visible, item, onCancel}) => {
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
              <TouchableOpacity>
                <Icon name={'Like'} color={Colors.WHITE} size={20} />
              </TouchableOpacity>
              <Text style={styles.likeText}>{numberWithComma(item.like)}</Text>
            </View>
            <TouchableOpacity>
              <Icon name={'Bookmark'} size={18} color={Colors.WHITE} />
            </TouchableOpacity>
          </View>
          <Text style={styles.numberOfComment}>
            {numberOfComments(item.commentList)}
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
              // onChangeText={text => findItem(text)}
              placeholder="Комментарий"
              placeholderTextColor={Colors.PEARL_PURPLE}
              underlineColorAndroid="rgba(0,0,0,0)"
            />
          </View>
          <TouchableOpacity>
            <Icon name={'PaperAirplane'} color={Colors.WHITE} size={22} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
