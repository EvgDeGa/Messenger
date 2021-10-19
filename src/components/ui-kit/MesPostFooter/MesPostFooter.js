import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {styles} from './MesPostFooterStyle';
import {Colors} from '../../../constants/Colors';

import Icon from '../../Icon';
import numberWithComma from '../../Functions/numberWithComma';
import numberOfComments from '../../Functions/numberOfComments';

export const PostFooter = ({like, commentList, onOpen}) => {
  return (
    <View style={styles.container}>
      <View style={styles.likeComment}>
        <View style={styles.like}>
          <TouchableOpacity>
            <Icon name={'Like'} color={Colors.WHITE} size={20} />
          </TouchableOpacity>
          <Text style={styles.text}>{numberWithComma(like)}</Text>
        </View>
        {commentList ? (
          <View style={styles.comment}>
            <TouchableOpacity onPress={() => onOpen()}>
              <Icon name={'Chat'} color={Colors.WHITE} size={20} />
            </TouchableOpacity>
            <Text style={styles.text}>{numberOfComments(commentList)}</Text>
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
