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
import {Http} from '../../../store/http';

export const Menu = props => {
  async function initSelfInf() {
    const data = await Http.get(
      'https://api.vk.com/method/users.get?user_ids=' +
        props.auth.userId +
        '&fields=bdate, city, country, home_town, has_photo, photo_100, domain,  site, education, universities, schools, status,  followers_count, common_count,  nickname, screen_name, is_friend, friend_status, career&access_token=' +
        props.auth.accessToken +
        '&v=5.131',
    );
    props.getSelfInf(data);
  }

  async function initFriends() {
    const data = await Http.get(
      'https://api.vk.com/method/friends.get?user_id=' +
        props.auth.userId +
        '&order=hints&fields=city,domain,photo_50&access_token=' +
        props.auth.accessToken +
        '&v=5.131',
    );
    props.getFriends(data.response);
  }

  async function initGroup() {
    const data = await Http.get(
      'https://api.vk.com/method/groups.get?user_id=' +
        props.auth.userId +
        '&extended=1&access_token=' +
        props.auth.accessToken +
        '&v=5.131',
    );
    props.getGroup(data.response);
  }

  return (
    <Modal animationType="fade" transparent visible={props.visible}>
      <View style={styles.centralView} onPress={props.onCancel}>
        <View style={styles.container}>
          <View style={styles.personalInformation}>
            <Image
              style={styles.profileImage}
              source={{uri: props.selfInf.photo_100}}
            />
            <View style={styles.textContainer}>
              <Text style={styles.name}>
                {props.selfInf.first_name} {props.selfInf.first_name}
              </Text>
              <Text style={styles.link}>{props.selfInf.domain}</Text>
            </View>
          </View>
          <View style={styles.menuList}>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  props.onCancel();
                  props.getSelfInf(props.auth);
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
                onPress={async () => {
                  props.onCancel();
                  await initFriends();
                  await initGroup();
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
