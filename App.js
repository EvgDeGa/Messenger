import React from 'react';
import {SafeAreaView} from 'react-native';
import {IconWithDescription} from './src/components/IconWithDescription'

export default function App(){
  return (
    <SafeAreaView style={{backgroundColor: "#000"}}>
      <IconWithDescription icon={require('./src/assets/img/icons/chat.svg')} text={'They never ask people to do things they wouldn’t do themselves.'}/>
    </SafeAreaView>
  );
};


