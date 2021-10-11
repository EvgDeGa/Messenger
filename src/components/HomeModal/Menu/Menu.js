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

export const Menu = ({visible, onCancel}) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.centralView} onPress={onCancel}>
        <View style={styles.container}>
          <View style={styles.personalInformation}>
            <Image
              style={styles.profileImage}
              source={require('../../../../assets/img/ProfileImage.png')}
            />
            <View style={styles.textContainer}>
              <Text style={styles.name}>Kat Williams</Text>
              <Text style={styles.link}>@Williams</Text>
            </View>
          </View>
          <View style={styles.menuList}>
            <Text style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Profile'}
                text={'Мой профиль'}
                textColor={Colors.WHITE}
                textSize={16}
              />
            </Text>
            <Text style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Group'}
                text={'Друзья'}
                textColor={Colors.WHITE}
                textSize={16}
              />
            </Text>
            <Text style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Search'}
                text={'Поиск'}
                textColor={Colors.WHITE}
                textSize={16}
              />
            </Text>
            <Text style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'SettingCog'}
                text={'Настройки'}
                textColor={Colors.WHITE}
                textSize={16}
              />
            </Text>
          </View>
        </View>
        <Pressable style={styles.press} onPress={onCancel} />
      </View>
    </Modal>
  );
};
