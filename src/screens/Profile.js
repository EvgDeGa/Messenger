import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { ProfilePhotoScroll } from '../components/UI-KIT/ProfilePhotoScroll';
import { TextWithNumber } from '../components/UI-KIT/TextWithNumber';
import { TransparentButton } from '../components/UI-KIT/TransparentButton';
import { ProfileImage } from '../components/UI-KIT/ProfileImage';

import { Colors } from '../constants/Colors';
import Icon from '../components/Icon/icon';
import { Fonts } from '../constants/Fonts';
import { MoreDetails } from './MoreDetails';
import { MoreAction } from './MoreAction';


const DATA ={
  selfInf: {
    name: 'Kat Williams',
    link: '@Williams',
    podilePhoto: require('../assets/img/ProfileImage.png'),
    country: "Россия",
    city: "Санкт-Петербург",
    birthDay: "08 октября 1992",
    status: "They never ask people to do things they wouldn’t do themselves.",
    workpalce: "Artist by Passion!",
    studies: "ВГУЮ в г. Санкт-Петербург"
  },
  social:{
    arrow: "http://t.me/durov",
    twitter: "Durov",
    instagram: "Pavel Durov",
    facebook : "durov",
    telegram: "durov"
  },
  followers: "2467",
  following: "1589",
  gallary: [
    {
      id: '1',
      title: 'First Item',
      source: require('../assets/img/ProfilePhotoScrol/1.png')
    },
    {
      id: '2',
      title: 'First Item',
      source: require('../assets/img/ProfilePhotoScrol/2.png')
    },
    {
      id: '3',
      title: 'First Item',
      source: require('../assets/img/ProfilePhotoScrol/3.png')
    },
    {
      id: '4',
      title: 'First Item',
      source: require('../assets/img/ProfilePhotoScrol/4.png')
    },
    {
      id: '5',
      title: 'First Item',
      source: require('../assets/img/ProfilePhotoScrol/5.png')
    },
    {
      id: '6',
      title: 'First Item',
      source: require('../assets/img/ProfilePhotoScrol/6.png')
    },
    {
      id: '7',
      title: 'First Item',
      source: require('../assets/img/ProfilePhotoScrol/7.png')
    },
    {
      id: '8',
      title: 'First Item',
      source: require('../assets/img/ProfilePhotoScrol/8.png')
    },
    {
      id: '9',
      title: 'First Item',
      source: require('../assets/img/ProfilePhotoScrol/9.png')
    },
    {
      id: '13',
      title: 'First Item',
      source: require('../assets/img/ProfilePhotoScrol/1.png')
    },
    {
      id: '14',
      title: 'First Item',
      source: require('../assets/img/ProfilePhotoScrol/2.png')
    },
    {
      id: '15',
      title: 'First Item',
      source: require('../assets/img/ProfilePhotoScrol/3.png')
    }
  ]
}

export const Profile = ({}) => {
  const [moreDetails, setMoreDetails] = useState(false)
  const [moreAction, setMoreAction] = useState(false)
  
  return (
    <SafeAreaView style={styles.profileContainer}>
        <View style={styles.profileInformation}>
          <View style={styles.profileInformation_firstLine}>
            <View style={styles.icon}><Icon name={"ArrowLeft"} size={20} color={Colors.white}/></View>
            <View style={styles.personalInformation}>
              <ProfileImage image={DATA.selfInf.podilePhoto} size={95}/>
              <Text style={styles.name}>{DATA.selfInf.name}</Text>
              <Text style={styles.link}>{DATA.selfInf.link}</Text>
              <Text style={styles.countryCity}>{DATA.selfInf.country}, {DATA.selfInf.city}</Text>
              <Text style={styles.workpalce}>Место работы: {DATA.selfInf.workpalce}</Text>
            </View>
            <TouchableOpacity onPress={() => setMoreAction(true)} style={styles.icon}><Icon name={"HorizontalDots"} size={20} color={Colors.white}/></TouchableOpacity>
          </View>
          <View style={styles.profileInformation_secondLine}>
            <TextWithNumber text={"Followers"} number={DATA.followers}/> 
            <TextWithNumber text={"Following"} number={DATA.following}/>
            <TransparentButton text={'Подробнее'} onClick={() => setMoreDetails(true)}/>
          </View>
        </View>
        <View style={{ marginHorizontal: 16, borderTopWidth: 1, borderColor: Colors.purple_06}}/>
        <View style={styles.gallery}>
          <View style={styles.gallery_Text}>
            <Text style={
              {
              fontFamily: Fonts.HK_Grotesk_Medium,
              color: Colors.white,
              fontSize: 14,
              lineHeight: 20,
              paddingRight: 6
            }}>Фотографии</Text>
            <Text style={
              {
              fontFamily: Fonts.HK_Grotesk_Medium,
              color: Colors.purple_04,
              fontSize: 14,
              lineHeight: 20,
            }}>{DATA.gallary.length}</Text>
          </View>
          <ProfilePhotoScroll data={DATA.gallary} />
        </View>
        <View style={{width: "100%", height: 45, backgroundColor: Colors.purple_1 }}/>
        <MoreAction  visible={moreAction} onCancel={ () => setMoreAction(false)}/>
        <MoreDetails selfInf={DATA.selfInf} social={DATA.social} visible={moreDetails} onCancel={ () => setMoreDetails(false)}/>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    profileContainer:{
      flex: 1,
      backgroundColor: Colors.purple_08,
     
    },
    profileInformation: {
      paddingHorizontal: 16
    },
    profileInformation_firstLine:{
      flexDirection: "row",
      justifyContent: "space-between"
    },
    icon:{
      paddingTop: 20
    },
    personalInformation:{
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 30
    },
    name:{
      fontFamily: Fonts.HK_Grotesk_Bold,
      color: Colors.white,
      fontSize: 16,
      lineHeight: 16,
      paddingTop: 17
    },
    link:{
      fontFamily: Fonts.HK_Grotesk_Medium,
      color: Colors.purple_04,
      fontSize: 12,
      lineHeight: 16,
      paddingTop: 6

    },
    countryCity:{
      fontFamily: Fonts.HK_Grotesk_Medium,
      color: Colors.purple_04,
      fontSize: 14,
      lineHeight: 16,
      paddingTop: 28
    },
    workpalce:{
      fontFamily: Fonts.HK_Grotesk_Medium,
      color: Colors.white,
      fontSize: 14,
      lineHeight: 20,
      paddingTop: 9
    },
    profileInformation_secondLine:{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 5,
      paddingTop: 24,
      paddingBottom: 30,

    },
    gallery:{
      flex: 1,
      flexDirection: "column",
      paddingTop: 20,
      paddingHorizontal: 16
      // paddingBottom: 45
    },
    gallery_Text:{
      flexDirection: "row",
      justifyContent: "center",
      paddingBottom: 8
    }
});
