import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {IconWithDescription} from './src/components/IconWithDescription'
import { Colors } from './src/constants/Colors';
import Icon from './src/components/Icon/icon'

export default function App(){
  return (
    <SafeAreaView >
      <IconWithDescription icon={'chat'} text={'They never ask people to do things they wouldn’t do themselves.'}/>
    </SafeAreaView>
  );
};


