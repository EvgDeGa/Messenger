import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList,TouchableOpacity, Dimensions  } from 'react-native';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';

const DATA = [
    {
      id: '1-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    //   source: require('./src/assets/img/ProfileImage.png')
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571ie29d72',
      title: 'Third Item',
    },
    {
        id: 'bd7acbwea-c1b1-46c2-aedi5-3ad53abb28ba',
        title: 'Fierst Item',
      },
      {
        id: '3ac68afec-c605-48d3-a4f8-fbd91aai97f63',
        title: 'Seecond Item',
      },
      {
        id: '5869ii4a0wf-3da1-471f-bd96-145571e29d72',
        title: 'Thierd Item',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aedi5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68iafc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-ibd96-145571e29d72',
        title: 'Third Item',
      },
      {
          id: 'bd7acbwea-c1b1-i46c2-aed5-3ad53abb28ba',
          title: 'Fierst Item',
        },
        {
          id: '3ac68afec-c60i5-48d3-a4f8-fbd91aa97f63',
          title: 'Seecond Item',
        },
        {
          id: '58694a0wf-i3da1-471f-bd96-145571e29d72',
          title: 'Thierd Item',
        },
  ];
  
  const Item = ({ item, onPress, border }) => (
    <TouchableOpacity onPress={onPress} style={border}>
      {/* <Image style={styles.title} source={item}/> */}
      <Text style={styles.item}>{item.title}</Text>
    </TouchableOpacity>
  );

export const ProfilePhotoScroll = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        border={{borderWidth: 1, borderColor: "#000"}}
        textColor={{ color }}
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
      height: 300
    //   marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        borderWidth: 1,
        borderColor: "#FFF",
      width: Dimensions.get('window').width/5,
      color: Colors.purple_08,
      padding: 20,
    //   marginVertical: 8,
    //   marginHorizontal: 16,
    },
    
  });