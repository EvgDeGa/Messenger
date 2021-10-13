import React from 'react';
import {Text, View} from 'react-native';
import Icon from '../../Icon';
import {Colors} from '../../../constants/Colors';
import {styles} from './MesPostFooterStyle';

export const PostFooter = props => {
  function modNumber(number) {
    let numLength = String(number).length;
    let buffer = String(number);
    if (numLength > 3) {
      let modNumber = '';
      for (let i = 0; i < ~~(numLength / 3); i++) {
        modNumber =
          ',' +
          buffer.slice(numLength - 3 * (i + 1), numLength - 3 * i) +
          modNumber;
      }
      if (numLength % 3 == 0) {
        modNumber = modNumber.slice(1);
      } else {
        modNumber =
          buffer.slice(0, numLength - 3 * ~~(numLength / 3)) + modNumber;
      }
      return modNumber;
    } else {
      return buffer;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.likeComment}>
        <View style={styles.like}>
          <Icon name={'Like'} color={Colors.WHITE} size={20} />
          <Text style={styles.text}>{modNumber(props.data.like)}</Text>
        </View>
        {props.data.commentList ? (
          <View style={styles.comment}>
            <Icon name={'Chat'} color={Colors.WHITE} size={20} />
            <Text style={styles.text}>
              {modNumber(props.data.commentList.length)}
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
