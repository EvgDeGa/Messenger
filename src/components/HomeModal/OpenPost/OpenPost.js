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

export const OpenPost = props => {
  const [replyToComment, setReplyToComment] = useState(0);
  const [text, setText] = useState('');
  let photo;
  if (props.post.attachments) {
    photo = props.post.attachments.filter(item => item.type == 'photo');
  } else {
  }
  // console.log(props.auth);
  // console.log('ff', props.post, 'dd', props.post);
  return (
    <Modal animationType="fade" transparent visible={props.visible}>
      <View style={styles.centralView}>
        <BackHeader back={() => props.onCancel()} text={'Запись'} />
        <ScrollView>
          <PostHeader
            group={props.group[0]}
            profile={props.profile[0]}
            date={props.post.date}
          />
          <View style={styles.content}>
            {photo.map(postPhoto => {
              const photo = postPhoto.photo.sizes.filter(
                size => size.type == 'p',
              );
              return (
                <View key={new Date().getTime()} style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: photo[0].url,
                    }}
                  />
                </View>
              );
            })}
            {props.post.text.length ? (
              <Text style={styles.text}>{props.post.text}</Text>
            ) : null}
          </View>
          <View style={styles.interactionBlock}>
            <View style={styles.like}>
              <TouchableOpacity onPress={() => console.log('likepost')}>
                <Icon name={'Like'} color={Colors.WHITE} size={20} />
              </TouchableOpacity>
              <Text style={styles.likeText}>{props.post.likes.count}</Text>
            </View>
            <TouchableOpacity>
              <Icon name={'Bookmark'} size={18} color={Colors.WHITE} />
            </TouchableOpacity>
          </View>
          <CommentList />
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
            onPress={() =>
              props.sendComment(
                text,
                replyToComment,
                props.auth,
                props.post.post_id,
                props.post.source_id,
              )
            }>
            <Icon name={'PaperAirplane'} color={Colors.WHITE} size={22} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
