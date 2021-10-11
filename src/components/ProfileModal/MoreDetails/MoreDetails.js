import React from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';

import IconWithDescription from '../../ui-kit/MesIconWithDescription';

import {Colors} from '../../../constants/Colors';
import Icon from '../../Icon';
import styles from './MoreDetailsStyle';

export const MoreDetails = ({selfInf, social, visible, onCancel}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.centralView}>
        <View style={styles.detailsContainer}>
          <View style={styles.profileInformation}>
            <View style={styles.closeContainer}>
              <Text style={styles.text}>Подробнее</Text>
              <TouchableOpacity onPress={onCancel}>
                <Icon
                  name={'BackSpace'}
                  size={12}
                  color={Colors.PEARL_PURPLE}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Chat'}
                text={selfInf.status}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Cake'}
                text={'День рождения: ' + selfInf.birthDay}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Location'}
                text={'Город: ' + selfInf.city}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Case'}
                text={selfInf.studies}
              />
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.contacts}>
            <View>
              <Text style={styles.text}>Контакты</Text>
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'ArrowTopRigth'}
                text={social.arrow}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Twitter'}
                text={social.twitter}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Instagram'}
                text={social.instagram}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Facebook'}
                text={social.facebook}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Telegram'}
                text={social.telegram}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
