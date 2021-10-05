import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {IconWithDescription} from './src/components/UI-KIT/IconWithDescription'
import { ProfileImage } from './src/components/UI-KIT/ProfileImage';
import { TextWithNumber } from './src/components/UI-KIT/TextWithNumber';
import { TransparentButton } from './src/components/UI-KIT/TransparentButton';
import { Colors } from './src/constants/Colors';

export default function App(){
  return (
    <SafeAreaView style={{padding: 50, backgroundColor: Colors.black}}>
     <View style={{flexDirection: "row", justifyContent: "space-between"}}>
      <TextWithNumber text={"Followers"} number={"2347"}/> 
      <TextWithNumber text={"Followers"} number={"242133"}/>
      <TransparentButton text={'Подробнее'} />
      </View>
      
      <ProfileImage image={require('./src/assets/img/ProfileImage.png')} size={95}/>
      <IconWithDescription iconColor={Colors.white} icon={'Chat'} text={'They never ask people to do things they wouldn’t do themselves.'}/>
    </SafeAreaView>
  );
};


