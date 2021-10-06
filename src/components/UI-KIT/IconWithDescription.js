import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {Colors} from '../../constants/Colors'
import {Fonts} from '../../constants/Fonts'
import Icon from '../Icon/icon'

export const IconWithDescription = ({iconColor, icon , text}) => {
  return (
    <View style={styles.IWD}>
        <View style={styles.icon}><Icon name={icon} size={20} color={iconColor}/></View>
        <View style={styles.textContainer}><Text style={styles.text}>{text}</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
    IWD:{
      flexDirection: "row",
      flexWrap: 'wrap',
    },
    icon:{
      justifyContent: "center"
    },
    text:{
      fontFamily: Fonts.HK_Grotesk_Medium,
      paddingLeft: 9,
      fontSize: 14,
      color: Colors.purple_02,
    },
    textContainer:{
      flex: 1,
      justifyContent: "center"
    } 
  });
