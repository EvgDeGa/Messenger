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
                  textColor={Colors.PERIWINKLE_KRAIOLA}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Chat'}
                text={selfInf.status}
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Cake'}
                text={'День рождения: ' + selfInf.birthDay}
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Location'}
                text={'Город: ' + selfInf.city}
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Case'}
                text={selfInf.studies}
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
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
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Twitter'}
                text={social.twitter}
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Instagram'}
                text={social.instagram}
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Facebook'}
                text={social.facebook}
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Telegram'}
                text={social.telegram}
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
