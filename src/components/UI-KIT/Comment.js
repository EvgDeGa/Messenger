import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';
import { ProfileImage } from './ProfileImage';
import Icon from '../Icon/icon';
import { CommentContent } from './CommentContent';



export const Comment = ({item}) => {
  const [selectedId, setSelectedId] = useState(null);

  const subCommentPadding = item.parent ? 53 : 0
  const imageSize = item.parent ? 30 : 43
  
  const renderItem = ({ item }) => {
    return (
      <Comment item={item} reply={() => onPress}/>
    );
  };

  return (
    <View style={[styles.commentContainer,{paddingLeft: subCommentPadding}]}>
        <View style={styles.commentItem}>
            <View style={styles.image}><ProfileImage image={require('../../assets/img/ProfileImage.png')} size={imageSize}/></View>
            <View style={styles.commentBody}>
                <Text style={styles.nameText}>{item.commetHolder}</Text>
                <CommentContent text={item.body} image={item.image} />
                <View style={styles.buttonDate}>
                    <Text style={styles.dateText}>{item.date}</Text>
                    <TouchableOpacity onPress={() => setSelectedId(item.id)}><Text style={styles.replyButton}>Ответить</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.likeContainer}>
                <TouchableOpacity onPress={() => console.log("like")}><Icon name={"Like"} size={16} color={Colors.white} /></TouchableOpacity>
                <Text style={styles.likeText}>{item.like}</Text>
            </View>
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
    commentContainer:{      
      paddingTop: 10
    },
    commentItem:{
      flexDirection: "row"      
    },
    image:{
      height: 43,
      justifyContent: "center"        
    },
    commentBody:{
      flex: 1,
      flexDirection: "column",
      paddingTop: 4,
      paddingLeft: 10,
      paddingRight: 7
    },
    nameText:{
      fontFamily: Fonts.HK_Grotesk_SemiBold,
      fontSize: 14,
      lineHeight: 16,
      color: Colors.white,
      
    },
    buttonDate: {
      flexDirection: "row"
    },
    dateText:{
      fontFamily: Fonts.HK_Grotesk_Medium,
      fontSize: 10,
      lineHeight: 16,
      color: Colors.purple_04,
      marginRight: 20
    },
    replyButton:{
      fontFamily: Fonts.HK_Grotesk_Medium,
      fontSize: 10,
      lineHeight: 16,
      color: Colors.white  
    },
    likeContainer:{
      width: 38,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 24
    },
    likeText:{
      fontFamily: Fonts.HK_Grotesk_Medium,
      fontSize: 12,
      lineHeight: 16,
      color: Colors.white 
    }

  });
