import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';

export const TransparentButton = ({text, onClick}) => {
  return (
    
    <TouchableOpacity onPress={onClick}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    
    text:{
      borderColor: Colors.purple_06,
      borderWidth: 1,
      borderRadius: 30,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 31,
      paddingRight: 31, 

      fontFamily: Fonts.HK_Grotesk_Bold,
      fontSize: 14,
      lineHeight: 24,
      color: Colors.white,  
      textAlign: "center"
    }
  });
