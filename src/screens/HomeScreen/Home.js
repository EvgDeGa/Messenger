import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';

import {styles} from './HomeStyle';
import {Colors} from '../../constants/Colors';

import Icon from '../../components/Icon';
import Post from '../../components/ui-kit/MesPost';
import Menu from '../../components/HomeModal/Menu';
import OpenPost from '../../components/HomeModal/OpenPost';

export const Home = props => {
  const [menu, setMenu] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({item}) => {
    return (
      <Post
        data={item}
        onPress={() => {
          setSelectedItem(item);
          setSelectedId(item.id);
          setOpenPost(true);
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerMenu}
          activeOpacity={0}
          onPress={() => setMenu(true)}>
          <Icon name={'Menu'} color={Colors.WHITE} size={22} />
        </TouchableOpacity>
        <View style={styles.headerRigth}>
          <TouchableOpacity>
            <Icon name={'Search'} color={Colors.WHITE} size={22} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name={'Alert'} color={Colors.WHITE} size={22} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={props.data.postInformation}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={1}
      />
      <Menu
        visible={menu}
        onCancel={() => setMenu(false)}
        navigation={props.navigation}
        selfInf={props.data.selfInf}
      />
      {selectedItem ? (
        <OpenPost
          item={selectedItem}
          visible={openPost}
          onCancel={() => setOpenPost(false)}
        />
      ) : null}
    </SafeAreaView>
  );
};
