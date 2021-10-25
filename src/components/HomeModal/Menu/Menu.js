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
  return (
    <Modal animationType="fade" transparent visible={props.visible}>
      <View style={styles.centralView} onPress={props.onCancel}>
        <View style={styles.container}>
          <View style={styles.personalInformation}>
            {props.loader ? (
              <View style={styles.photoLoader} />
            ) : (
              <Image
                style={styles.profileImage}
                source={{uri: props.selfInf.photo_100}}
              />
            )}
            <View style={styles.textContainer}>
              {props.loader ? (
                <View>
                  <View style={styles.nameLoader} />
                  <View style={styles.linkloader} />
                </View>
              ) : (
                <View>
                  <Text style={styles.name}>
                    {props.selfInf.first_name} {props.selfInf.first_name}
                  </Text>
                  <Text style={styles.link}>{props.selfInf.domain}</Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.menuList}>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  props.onCancel();
                  props.getSelfInf(props.auth);
                  props.getGallery(props.auth);
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
                  props.getFriends(props.auth);
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
                  props.getSearch(props.auth);
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
