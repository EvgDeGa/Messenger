import React from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';

import {styles} from './MoreDetailsStyle';
import {Colors} from '../../../constants/Colors';

import Icon from '../../Icon';
import IconWithDescription from '../../ui-kit/MesIconWithDescription';

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
                text={selfInf.status ? selfInf.status : 'Нет статуса'}
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Cake'}
                text={
                  selfInf.bdate
                    ? 'День рождения: ' + selfInf.bdate
                    : 'День рождения: Не указано'
                }
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Location'}
                text={
                  selfInf.home_town
                    ? 'Город: ' + selfInf.home_town
                    : 'Город: Не указано'
                }
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Case'}
                text={
                  selfInf.universities[0]
                    ? selfInf.universities[0]
                    : 'Не указано'
                }
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
                text={selfInf.site ? selfInf.site : 'Не указано'}
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Twitter'}
                text={selfInf.twitter ? selfInf.twitter : 'Не указано'}
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Instagram'}
                text={selfInf.instagram ? selfInf.instagram : 'Не указано'}
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Facebook'}
                text={selfInf.facebook ? selfInf.facebook : 'Не указано'}
                textColor={Colors.PERIWINKLE_KRAIOLA}
                textSize={14}
              />
            </View>
            <View style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Telegram'}
                text={selfInf.site ? selfInf.site : 'Не указано'}
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
