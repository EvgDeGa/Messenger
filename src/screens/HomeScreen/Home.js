import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';

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

  useEffect(() => {
    if (!props.posts.items.length) {
      props.getPost(props.auth);
      // console.log('hi');
    }
  });

  const renderItem = ({item}) => {
    return (
      <Post
        post={item}
        group={props.posts.groups.filter(
          group => '-' + group.id == item.source_id,
        )}
        profile={props.posts.profiles.filter(
          profile => profile.id == item.source_id,
        )}
        onPress={() => {
          setSelectedItem(item);
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
          onPress={() => {
            props.getSelfInf(props.auth);
            setMenu(true);
          }}>
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
      {props.loader ? (
        <View>
          <Text style={styles.loading}>Загрузка...</Text>
        </View>
      ) : null}
      {props.loader ? null : (
        <FlatList
          data={props.posts.items}
          renderItem={renderItem}
          keyExtractor={item => item.source_id + item.date}
          extraData={selectedId}
          numColumns={1}
        />
      )}
      <Menu
        visible={menu}
        onCancel={() => setMenu(false)}
        navigation={props.navigation}
      />
      {selectedItem ? (
        <OpenPost
          post={selectedItem}
          group={props.posts.groups.filter(
            group => '-' + group.id == selectedItem.source_id,
          )}
          profile={props.posts.profiles.filter(
            profile => '-' + profile.id == selectedItem.source_id,
          )}
          visible={openPost}
          onCancel={() => setOpenPost(false)}
        />
      ) : null}
    </SafeAreaView>
  );
};
