import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList,TouchableOpacity, Dimensions  } from 'react-native';

  const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={{ }}>
      <Image style={styles.title}  source={item.source}/>
    </TouchableOpacity>
  );

export const ProfilePhotoScroll = ({data}) => {
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
            data={data}
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
      flex: 1,
    },
    title: {
        marginTop: 3,
        width: (Dimensions.get('window').width - 38)/3 ,
        height: (Dimensions.get('window').width - 38)/3 ,
        aspectRatio: 1, 
        resizeMode: 'contain',
    },
    
  });