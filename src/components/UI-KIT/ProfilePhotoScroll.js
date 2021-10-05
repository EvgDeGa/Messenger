import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList,TouchableOpacity, Dimensions  } from 'react-native';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';

const DATA = [
    {
      id: '1',
      title: 'First Item',
      source: require('../../assets/img/ProfilePhotoScrol/1.png')
    },
    {
        id: '2',
        title: 'First Item',
        source: require('../../assets/img/ProfilePhotoScrol/2.png')
      },
      {
        id: '3',
        title: 'First Item',
        source: require('../../assets/img/ProfilePhotoScrol/3.png')
      },
      {
        id: '4',
        title: 'First Item',
        source: require('../../assets/img/ProfilePhotoScrol/4.png')
      },
      {
        id: '51',
        title: 'First Item',
        source: require('../../assets/img/ProfilePhotoScrol/5.png')
      },
      {
        id: '155',
        title: 'First Item',
        source: require('../../assets/img/ProfilePhotoScrol/11.png')
      },
      {
        id: '16',
        title: 'First Item',
        source: require('../../assets/img/ProfilePhotoScrol/7.png')
      },
      {
        id: '71',
        title: 'First Item',
        source: require('../../assets/img/ProfilePhotoScrol/8.png')
      },
      {
        id: '18',
        title: 'First Item',
        source: require('../../assets/img/ProfilePhotoScrol/9.png')
      },{
        id: '123',
        title: 'First Item',
        source: require('../../assets/img/ProfilePhotoScrol/10.png')
      },
      {
        id: '1124',
        title: 'First Item',
        source: require('../../assets/img/ProfilePhotoScrol/11.png')
      },
      {
        id: '1231',
        title: 'First Item',
        source: require('../../assets/img/ProfilePhotoScrol/12.png')
      },
         
                   
  ];
  
  const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={{ }}>
      <Image style={styles.title}  source={item.source}/>
      {/* <Text style={styles.item}>{item.title}</Text> */}
    </TouchableOpacity>
  );

export const ProfilePhotoScroll = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
      <View style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            numColumns={3}
            columnWrapperStyle={{justifyContent: "space-between"}}
        />
      </View>
  );
 
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
      height: 300
    //   marginTop: StatusBar.currentHeight || 0,
    },
    title: {
        marginTop: 3,
        width: (Dimensions.get('window').width - 38)/3 ,
        height: (Dimensions.get('window').width - 38)/3 ,
        flex: 1,
        aspectRatio: 1, 
        resizeMode: 'contain',
    },
    
  });