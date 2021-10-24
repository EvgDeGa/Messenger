import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';

import {styles} from './HomeStyle';
import {Colors} from '../../constants/Colors';

import {Http} from '../../store/http';
import Icon from '../../components/Icon';
import Post from '../../components/ui-kit/MesPost';
import Menu from '../../components/HomeModal/Menu';
import OpenPost from '../../components/HomeModal/OpenPost';

export const Home = props => {
  const [menu, setMenu] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  async function initSelfInf() {
    const data = await Http.get(
      'https://api.vk.com/method/users.get?user_ids=' +
        props.auth.userId +
        '&fields=bdate, city, country, home_town, has_photo, photo_100, domain,  site, education, universities, schools, status,  followers_count, common_count,  nickname, screen_name, is_friend, friend_status, career&access_token=' +
        props.auth.accessToken +
        '&v=5.131',
    );
    props.getSelfInf(data);
  }

  const renderItem = ({item}) => {
    return (
      <Post
        postInformation={item}
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
            initSelfInf();
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
      <FlatList
        data={props.postInformation}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={1}
      />
      <Menu
        visible={menu}
        onCancel={() => setMenu(false)}
        navigation={props.navigation}
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
