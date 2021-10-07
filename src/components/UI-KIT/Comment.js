import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';



export const Comment = ({item}) => {
  const [selectedId, setSelectedId] = useState(null);

//   const subCommentPadding
  
  const renderItem = ({ item }) => {
    return (
      <Comment item={item} reply={() => onPress}/>
    );
  };

  return (
    <View>
        <View>
        
        </View>
        <View>
        <Text>{item.commetHolder}</Text>
        <Text>{item.body}</Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => setSelectedId(item.id)}><Text>Ответить</Text></TouchableOpacity>
        </View>
        {item.reply && item.reply.length ? <FlatList
            data={item.reply}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}            
           /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
    
    text:{
      borderColor: Colors.purple_06,
      borderWidth: 1,
      borderRadius: 30,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 31,
      paddingRight: 31, 

      fontFamily: Fonts.HK_Grotesk_Bold,
      fontSize: 14,
      lineHeight: 24,
      color: Colors.white,  
      textAlign: "center"
    }
  });
