import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {IconWithDescription} from './src/components/UI-KIT/IconWithDescription'
import { ProfileImage } from './src/components/UI-KIT/ProfileImage';
import { TransparentButton } from './src/components/UI-KIT/TransparentButton';
import { Colors } from './src/constants/Colors';

export default function App(){
  return (
    <SafeAreaView style={{padding: 50, backgroundColor: Colors.black}}>
      <TransparentButton text={'Подробнее'} buttoWidth={145}/>
      <ProfileImage image={require('./src/assets/img/ProfileImage.png')} size={95}/>
      <IconWithDescription iconColor={Colors.white} icon={'Chat'} text={'They never ask people to do things they wouldn’t do themselves.'}/>
    </SafeAreaView>
  );
};


