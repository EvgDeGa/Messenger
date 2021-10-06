import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Modal, TouchableOpacity } from 'react-native';

import { IconWithDescription } from '../components/UI-KIT/IconWithDescription';

import { Colors } from '../constants/Colors';
import { Fonts } from '../constants/Fonts';

export const MoreAction = ({visible, onCancel}) => {
  
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.centralView}>
          <View style={styles.container}>
            <View style={styles.menu}>       
                <Text style={styles.item}><IconWithDescription iconColor={Colors.white} icon={'Share'} text={"Поделится"}/></Text>
                <View style={styles.line}/>    
                <Text style={styles.item}><IconWithDescription iconColor={Colors.white} icon={'DocDuplicate'} text={"Скопировать ссылку"}/> </Text> 
            </View>  
            <TouchableOpacity style={styles.cancel} onPress={onCancel}><Text style={styles.cancelText}>Отмена</Text></TouchableOpacity>   
          </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    centralView:{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      },
      container:{
        width: "100%"
      },
      menu:{  
        backgroundColor: Colors.purple_08,
        paddingHorizontal: 16
      },
      item:{
        paddingVertical: 16
      },
      line:{  
        borderTopWidth: 1,
        borderColor: Colors.purple_06
      },
      cancel:{  
        backgroundColor: Colors.purple_08,
        borderRadius: 15,
        marginTop: 10,
        paddingVertical: 17        
      },
      cancelText:{  
        fontFamily: Fonts.HK_Grotesk_Bold,
        fontSize: 16,
        textAlign: "center",
        color: Colors.white        
      },
  });
