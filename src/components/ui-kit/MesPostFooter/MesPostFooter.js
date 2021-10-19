import React from 'react';
import {Text, View} from 'react-native';
import Icon from '../../Icon';
import {Colors} from '../../../constants/Colors';
import {styles} from './MesPostFooterStyle';
import numberWithComma from '../../Functions/numberWithComma';

export const PostFooter = props => {
  return (
    <View style={styles.container}>
      <View style={styles.likeComment}>
        <View style={styles.like}>
          <Icon name={'Like'} color={Colors.WHITE} size={20} />
          <Text style={styles.text}>{numberWithComma(props.data.like)}</Text>
        </View>
        {props.data.commentList ? (
          <View style={styles.comment}>
            <Icon name={'Chat'} color={Colors.WHITE} size={20} />
            <Text style={styles.text}>
              {numberWithComma(props.data.commentList.length)}
            </Text>
          </View>
        ) : null}
      </View>
      <View>
        <Icon name={'Bookmark'} color={Colors.WHITE} size={20} />
      </View>
    </View>
  );
};
