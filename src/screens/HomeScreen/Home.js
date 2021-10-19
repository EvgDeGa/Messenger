import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import Menu from '../../components/HomeModal/Menu';
import Post from '../../components/ui-kit/MesPost';
import Icon from '../../components/Icon';
import {styles} from './HomeStyle';
import {Colors} from '../../constants/Colors';
import News from '../../components/HomeModal/News';

export const Home = props => {
  const [menu, setMenu] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

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
          <Icon name={'Search'} color={Colors.WHITE} size={22} />
          <Icon name={'Alert'} color={Colors.WHITE} size={22} />
        </View>
      </View>

      <Menu
        visible={menu}
        onCancel={() => setMenu(false)}
        navigation={props.navigation}
      />
      {selectedItem ? (
        <News
          item={selectedItem}
          visible={openPost}
          onCancel={() => setOpenPost(false)}
        />
      ) : null}

      <FlatList
        data={props.data.postInformation}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={1}
      />
    </SafeAreaView>
  );
};
