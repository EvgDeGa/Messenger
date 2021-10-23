import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

import {styles} from './SearchStyle';
import {Colors} from '../../constants/Colors';

import Icon from '../../components/Icon';
import PersonInList from '../../components/ui-kit/MesPersonInList';

export const Search = props => {
  const [selectedId, setSelectedId] = useState(null);
  const [items, setItems] = useState(props.group.concat(props.friends));
  const [data, setData] = useState(items);
  const [check, setCheck] = useState(1);
  console.log(items);

  const renderItem = ({item}) => {
    return <PersonInList item={item} />;
  };

  const findItem = text => {
    if (text != ' ') {
      setItems(
        data.filter(person =>
          person.name.toLowerCase().includes(text.toLowerCase()),
        ),
      );
    } else {
      setItems(data);
    }
  };

  const menuSection = n => {
    setCheck(n);
    switch (n) {
      case 1:
        setItems(props.group.concat(props.friends));
        setData(props.group.concat(props.friends));
        break;

      case 2:
        setItems(props.friends);
        setData(props.friends);
        break;

      case 3:
        setItems(props.group);
        setData(props.group);
        break;
    }
  };

  const cheked = n => {
    if (check == n) {
      return styles.itemLineCheck;
    }
    return styles.itemLine;
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0}
          onPress={() => props.navigation.goBack()}>
          <Icon name={'ArrowLeft'} color={Colors.WHITE} size={22} />
        </TouchableOpacity>
        <View style={styles.searchInput}>
          <Icon name={'Search'} color={Colors.PEARL_PURPLE} size={22} />
          <TextInput
            style={styles.input}
            onChangeText={text => findItem(text)}
            placeholder="Поиск"
            placeholderTextColor={Colors.PEARL_PURPLE}
            underlineColorAndroid="rgba(0,0,0,0)"
          />
        </View>
      </View>
      <View style={styles.categoryMenu}>
        <View style={styles.menuPadding} />
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => menuSection(1)}>
            <Text style={styles.itemText}>Все</Text>
            <View style={cheked(1)} />
          </TouchableOpacity>
          <View style={styles.filler} />
          <TouchableOpacity onPress={() => menuSection(2)}>
            <Text style={styles.itemText}>Люди</Text>
            <View style={cheked(2)} />
          </TouchableOpacity>
          <View style={styles.filler} />
          <TouchableOpacity onPress={() => menuSection(3)}>
            <Text style={styles.itemText}>Сообщества</Text>
            <View style={cheked(3)} />
          </TouchableOpacity>
        </View>
        <View style={styles.menuPadding} />
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={1}
      />
    </SafeAreaView>
  );
};
