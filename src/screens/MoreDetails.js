import React from 'react';
import { StyleSheet, Text, Image, View, Modal, TouchableOpacity } from 'react-native';

import { IconWithDescription } from '../components/UI-KIT/IconWithDescription';

import { Colors } from '../constants/Colors';
import Icon from '../components/Icon/icon';
import { Fonts } from '../constants/Fonts';

export const MoreDetails = ({selfInf, social, visible, onCancel}) => {
  
  return (
    
    <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.centralView}>
            <View style={styles.detailsContainer}>
                <View style={styles.profileInformation}>
                    <View style={styles.closeContainer}>
                        <Text style={styles.text}>Подробнее</Text>
                    <TouchableOpacity onPress={onCancel}><Icon name={"BackSpace"} size={12} color={Colors.purple_04}/></TouchableOpacity>
                    </View>
                    <View style={styles.item}><IconWithDescription iconColor={Colors.white} icon={'Chat'} text={selfInf.status}/></View>
                    <View style={styles.item}><IconWithDescription iconColor={Colors.white} icon={'Cake'} text={"День рождения: " + selfInf.birthDay}/></View>
                    <View style={styles.item}><IconWithDescription iconColor={Colors.white} icon={'Location'} text={'Город: '+ selfInf.city}/></View>
                    <View style={styles.item}><IconWithDescription iconColor={Colors.white} icon={'Case'} text={selfInf.studies}/></View>
                </View>
                <View style={styles.line}/>
                <View style={styles.contacts}>
                    <View><Text style={styles.text}>Контакты</Text></View>
                    <View style={styles.item}><IconWithDescription iconColor={Colors.white} icon={'ArrowTopRigth'} text={social.arrow}/></View>
                    <View style={styles.item}><IconWithDescription iconColor={Colors.white} icon={'Twitter'} text={social.twitter}/></View>
                    <View style={styles.item}><IconWithDescription iconColor={Colors.white} icon={'Instagram'} text={social.instagram}/></View>
                    <View style={styles.item}><IconWithDescription iconColor={Colors.white} icon={'Facebook'} text={social.facebook}/></View>
                    <View style={styles.item}><IconWithDescription iconColor={Colors.white} icon={'Telegram'} text={social.telegram}/></View>
                </View>
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
    detailsContainer:{  
      backgroundColor: Colors.purple_08,
      paddingHorizontal: 16,
      paddingTop: 13,
      paddingBottom: 53,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
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
    item:{
        paddingTop: 20
    },
    line:{
      borderTopWidth: 1,
      borderColor: Colors.purple_06
    }
});
