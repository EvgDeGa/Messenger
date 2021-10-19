import React, {useState} from 'react';
import {Image, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import BackHeader from '../../components/ui-kit/MesBackHeader';
import IconWithDescription from '../../components/ui-kit/MesIconWithDescription';
import {Colors} from '../../constants/Colors';

import {styles} from './SettingsStyle';

export const Settings = props => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <BackHeader back={() => props.navigation.goBack()} text={'Настройки'} />
      <TouchableOpacity style={styles.item}>
        <IconWithDescription
          iconColor={Colors.WHITE}
          icon={'ColorSwatch'}
          text={'Внешний вид'}
          textSize={16}
          textColor={Colors.WHITE}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <IconWithDescription
          iconColor={Colors.WHITE}
          icon={'Information'}
          text={'О приложении'}
          textSize={16}
          textColor={Colors.WHITE}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <IconWithDescription
          iconColor={Colors.PEARL_PURPLE}
          icon={'LogOut'}
          text={'Выйти'}
          textSize={16}
          textColor={Colors.PEARL_PURPLE}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
