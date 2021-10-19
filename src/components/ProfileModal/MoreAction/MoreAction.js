import React from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';

import {styles} from './MoreActionStyle.js';
import {Colors} from '../../../constants/Colors';

import IconWithDescription from '../../ui-kit/MesIconWithDescription';

export const MoreAction = ({visible, onCancel}) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.centralView}>
        <View style={styles.container}>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Share'}
                text={'Поделиться'}
                textColor={Colors.WHITE}
                textSize={16}
              />
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'DocDuplicate'}
                text={'Скопировать ссылку'}
                textColor={Colors.WHITE}
                textSize={16}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.cancel} onPress={onCancel}>
            <Text style={styles.cancelText}>Отмена</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
