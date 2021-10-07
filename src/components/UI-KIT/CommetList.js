import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';
import { ProfileImage } from './ProfileImage';
import Icon from '../Icon/icon';
import { Comment } from './Comment';




export const CommentList = ({commetList}) => {
  const [selectedId, setSelectedId] = useState(null);
  
  const renderItem = ({ item }) => {
    return (
      <Comment item={item} reply={() => onPress}/>
    );
  };

  return (
    <View>
        <FlatList
            data={commetList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}            
           /> 
    </View>
  );
};

const styles = StyleSheet.create({
   
  });
