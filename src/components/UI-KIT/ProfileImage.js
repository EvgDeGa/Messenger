import React from 'react';
import {Image, View } from 'react-native';


export const ProfileImage = ({image, size}) => {
  return (
    <View>
        <Image style={{width: size, height: size,}} source={image}/>
    </View>
  );
};
