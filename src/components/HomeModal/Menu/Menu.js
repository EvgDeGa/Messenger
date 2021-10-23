import React from 'react';
import {
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import IconWithDescription from '../../ui-kit/MesIconWithDescription';
import {Colors} from '../../../constants/Colors';
import {styles} from './MenuStyle';

export const Menu = props => {
  async function initFriends() {
    await fetch(
      'https://api.vk.com/method/friends.get?user_id=' +
        props.auth.userId +
        '&order=hints&fields=city,domain,photo_50&access_token=' +
        props.auth.accessToken +
        '&v=5.131',
      {
        method: 'GET',
      },
    )
      .then(res => res.json())
      .then(
        result => {
          props.getFriends(result.response);
        },
        error => {
          console.log('Ошибка при получении данных...');
        },
      );
  }

  async function initGroup() {
    await fetch(
      'https://api.vk.com/method/groups.get?user_id=' +
        props.auth.userId +
        '&extended=1&access_token=' +
        props.auth.accessToken +
        '&v=5.131',
      {
        method: 'GET',
      },
    )
      .then(res => res.json())
      .then(
        result => {
          props.getGroup(result.response);
        },
        error => {
          console.log('Ошибка при получении данных...');
        },
      );
  }

  return (
    <Modal animationType="fade" transparent visible={props.visible}>
      <View style={styles.centralView} onPress={props.onCancel}>
        <View style={styles.container}>
          <View style={styles.personalInformation}>
            <Image
              style={styles.profileImage}
              source={require('../../../../src/assets/img/ProfileImage.png')}
            />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{props.selfInf.name}</Text>
              <Text style={styles.link}>{props.selfInf.link}</Text>
            </View>
          </View>
          <View style={styles.menuList}>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  props.onCancel();
                  props.navigation.navigate('Profile');
                }}>
                <IconWithDescription
                  iconColor={Colors.WHITE}
                  icon={'Profile'}
                  text={'Мой профиль'}
                  textColor={Colors.WHITE}
                  textSize={16}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  props.onCancel();
                  initFriends();
                  props.navigation.navigate('Friends');
                }}>
                <IconWithDescription
                  iconColor={Colors.WHITE}
                  icon={'Group'}
                  text={'Друзья'}
                  textColor={Colors.WHITE}
                  textSize={16}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  props.onCancel();
                  initFriends();
                  initGroup();
                  props.navigation.navigate('Search');
                }}>
                <IconWithDescription
                  iconColor={Colors.WHITE}
                  icon={'Search'}
                  text={'Поиск'}
                  textColor={Colors.WHITE}
                  textSize={16}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  props.onCancel();
                  props.navigation.navigate('Settings');
                }}>
                <IconWithDescription
                  iconColor={Colors.WHITE}
                  icon={'SettingCog'}
                  text={'Настройки'}
                  textColor={Colors.WHITE}
                  textSize={16}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Pressable style={styles.press} propsonPress={props.onCancel} />
      </View>
    </Modal>
  );
};
