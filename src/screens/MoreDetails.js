import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, Modal, TouchableOpacity, Dimensions } from 'react-native';
import { ProfilePhotoScroll } from '../components/UI-KIT/ProfilePhotoScroll';
import { TextWithNumber } from '../components/UI-KIT/TextWithNumber';
import { TransparentButton } from '../components/UI-KIT/TransparentButton';
import { ProfileImage } from '../components/UI-KIT/ProfileImage';
import { IconWithDescription } from '../components/UI-KIT/IconWithDescription';


import { Colors } from '../constants/Colors';
import Icon from '../components/Icon/icon';
import { Fonts } from '../constants/Fonts';



export const MoreDetails = ({selfInf, social, visible, onCancel}) => {
  
  return (
    
    <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={{backgroundColor: "rgba(0, 0, 0, 0.6)", flex: 1}}></View>
        <View style={styles.detailsContainer}>
            <View style={styles.profileInformation}>
                <View style={styles.closeContainer}>
                    <Text style={styles.text}>Подробнее</Text>
                <TouchableOpacity onPress={onCancel}><Icon name={"BackSpace"} size={12} color={Colors.purple_04}/></TouchableOpacity>
                </View>
                <IconWithDescription iconColor={Colors.white} icon={'Chat'} text={selfInf.status}/>
                <IconWithDescription iconColor={Colors.white} icon={'Cake'} text={"День рождения: " + selfInf.birthDay}/>
                <IconWithDescription iconColor={Colors.white} icon={'Location'} text={'Город: '+ selfInf.city}/>
                <IconWithDescription iconColor={Colors.white} icon={'Case'} text={selfInf.studies}/>
            </View>
            <View style={styles.line}/>
            <View style={styles.contacts}>
                <Text style={styles.text}>Контакты</Text>
                <IconWithDescription iconColor={Colors.white} icon={'ArrowTopRigth'} text={social.arrow}/>
                <IconWithDescription iconColor={Colors.white} icon={'Twitter'} text={social.twitter}/>
                <IconWithDescription iconColor={Colors.white} icon={'Instagram'} text={social.instagram}/>
                <IconWithDescription iconColor={Colors.white} icon={'Facebook'} text={social.facebook}/>
                <IconWithDescription iconColor={Colors.white} icon={'Telegram'} text={social.telegram}/>
            </View>
        </View>
    </Modal>
    
  );
};

const styles = StyleSheet.create({
    
    detailsContainer:{
        position: "absolute",
        // borderColor: "#FFF",
        // borderWidth: 1,
      backgroundColor: Colors.purple_08,
      paddingHorizontal: 16,
      paddingTop: 13,
      paddingBottom: 53,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,

      bottom: 0,
      width: "100%"
    },
    profileInformation:{
        paddingBottom: 20
    },
    closeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text:{
        fontFamily: Fonts.HK_Grotesk_SemiBold,
        color: Colors.white,
        fontSize: 16,
        lineHeight: 16,
        paddingTop: 20,
        paddingBottom: 10
        },
    line:{
      borderTopWidth: 1,
      borderColor: Colors.purple_06
    }
});
