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
import numberWithComma from '../../../utils/Functions/numberWithComma';

export const OpenPost = props => {
  const [text, setText] = useState('');
  const photos = props.postPhoto.filter(photo => photo.postId == props.item.id);

  return (
    <Modal animationType="fade" transparent visible={props.visible}>
      <View style={styles.centralView}>
        <BackHeader back={() => props.onCancel()} text={'Запись'} />
        <ScrollView>
          <PostHeader data={props.item} />
          <View style={styles.content}>
            {photos.map(postPhoto => {
              return (
                <View key={new Date().getTime()} style={styles.imageContainer}>
                  <Image style={styles.image} source={postPhoto.photo} />
                </View>
              );
            })}
            {props.item.postText ? (
              <Text style={styles.text}>{props.item.postText}</Text>
            ) : null}
          </View>
          <View style={styles.interactionBlock}>
            <View style={styles.like}>
              <TouchableOpacity
                onPress={() => props.likePost(props.item.like, props.item.id)}>
                <Icon name={'Like'} color={Colors.WHITE} size={20} />
              </TouchableOpacity>
              <Text style={styles.likeText}>
                {numberWithComma(props.item.like)}
              </Text>
            </View>
            <TouchableOpacity>
              <Icon name={'Bookmark'} size={18} color={Colors.WHITE} />
            </TouchableOpacity>
          </View>

          <CommentList postId={props.item.id} />
        </ScrollView>
        <View style={styles.inputContainer}>
          <View style={styles.commentInput}>
            <TextInput
              style={styles.input}
              onChangeText={text => setText(text)}
              placeholder="Комментарий"
              placeholderTextColor={Colors.PEARL_PURPLE}
              underlineColorAndroid="rgba(0,0,0,0)"
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              if (text.replace(/\s+/g, '') != '') {
                props.addComment(text.trim(), props.selfInf, props.item.id);
              }
            }}>
            <Icon name={'PaperAirplane'} color={Colors.WHITE} size={22} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
