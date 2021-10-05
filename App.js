import React from 'react';
import {SafeAreaView} from 'react-native';
import {IconWithDescription} from './src/components/IconWithDescription'
import { Colors } from './src/constants/Colors';

export default function App(){
  return (
    <SafeAreaView style={{backgroundColor: Colors.purple_1}}>
      <IconWithDescription  text={'They never ask people to do things they wouldn’t do themselves.'}/>
    </SafeAreaView>
  );
};


