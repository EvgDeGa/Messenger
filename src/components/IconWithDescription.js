import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {Colors} from '../constants/Colors'
import Icon from '../../src/components/Icon/icon'

export const IconWithDescription = ({icon , text}) => {
  return (
    <View style={styles.IWD}>
        <View style={styles.icon}><Icon name={icon} size={30} color={Colors.white}/></View>
        <View style={styles.textContainer}><Text style={styles.text}>{text}</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
    IWD:{
      flexDirection: "row",
    },
    icon:{
      width: 42
    },
    text:{
      textAlign: "center",
      color: Colors.purple_02,
      fontSize: 14,
      lineHeight: 16,
    },
    textContainer:{
      justifyContent: "center"
    } 
  });
