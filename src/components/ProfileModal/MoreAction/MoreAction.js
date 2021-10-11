import React from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';

import IconWithDescription from '../../ui-kit/MesIconWithDescription';

import {Colors} from '../../../constants/Colors';
import styles from './MoreActionStyle.js';

export const MoreAction = ({visible, onCancel}) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.centralView}>
        <View style={styles.container}>
          <View style={styles.menu}>
            <Text style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'Share'}
                text={'Поделится'}
              />
            </Text>
            <View style={styles.line} />
            <Text style={styles.item}>
              <IconWithDescription
                iconColor={Colors.WHITE}
                icon={'DocDuplicate'}
                text={'Скопировать ссылку'}
              />{' '}
            </Text>
          </View>
          <TouchableOpacity style={styles.cancel} onPress={onCancel}>
            <Text style={styles.cancelText}>Отмена</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
