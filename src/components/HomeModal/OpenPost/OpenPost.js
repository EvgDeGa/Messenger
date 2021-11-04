import React, {useState, useEffect, useRef} from 'react';
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
  const textInputRef = useRef(null);
  const [replyToComment, setReplyToComment] = useState([0, '']);
  const [text, setText] = useState('');
  let photo;
  if (props.post.attachments) {
    photo = props.post.attachments.filter(item => item.type == 'photo');
  }

  useEffect(() => {
    // console.log(replyToComment[1]);
    // console.log(text);

    if ((replyToComment[1] != '') & (text == '')) {
      setText(replyToComment[1] + ', ');
    }
  });

  return (
    <Modal animationType="fade" transparent visible={props.visible}>
      <View style={styles.centralView}>
        <BackHeader
          back={() => {
            setText('');
            setReplyToComment([0, '']);
            props.onCancel();
          }}
          text={'Запись'}
        />
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
              <TouchableOpacity
                onPress={() =>
                  props.likePost(
                    props.auth,
                    props.post.likes.user_likes,
                    props.post.source_id,
                    props.post.post_id,
                  )
                }>
                <Icon name={'Like'} color={Colors.WHITE} size={20} />
              </TouchableOpacity>
              <Text style={styles.likeText}>{props.post.likes.count}</Text>
            </View>
            <TouchableOpacity>
              <Icon name={'Bookmark'} size={18} color={Colors.WHITE} />
            </TouchableOpacity>
          </View>
          <CommentList
            setReplyToComment={(id, name) => {
              setReplyToComment([id, name]);
              // console.log(replyToComment[1]);
            }}
          />
        </ScrollView>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <View style={styles.commentInput}>
              <TextInput
                ref={textInputRef}
                style={styles.inputText}
                onChangeText={text => {
                  setText(text);
                  if (text == '') {
                    setReplyToComment([0, '']);
                  }
                }}
                value={text}
                placeholder="Комментарий"
                placeholderTextColor={Colors.PEARL_PURPLE}
                underlineColorAndroid="rgba(0,0,0,0)"
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                props.sendComment(
                  text,
                  replyToComment[0],
                  props.auth,
                  props.post.post_id,
                  props.post.source_id,
                );
                textInputRef.current.clear();
                setReplyToComment([0, '']);
              }}>
              <Icon name={'PaperAirplane'} color={Colors.WHITE} size={22} />
            </TouchableOpacity>
          </View>
          <View>
            {replyToComment[1] ? (
              <Text style={styles.replyText}>
                Ответить: {replyToComment[1]}
              </Text>
            ) : null}
          </View>
        </View>
      </View>
    </Modal>
  );
};
