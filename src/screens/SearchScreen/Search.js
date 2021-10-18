import React, {useState} from 'react';
import {Image, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from '../../components/Icon';
import {styles} from './SearchStyle';

export const Search = ({}) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0}
          onPress={() => props.navigation.goBack()}>
          <Icon name={'ArrowLeft'} color={Colors.WHITE} size={22} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{text}</Text>
        <View style={styles.backButton} />
      </View>
    </SafeAreaView>
  );
};
