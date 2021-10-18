import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from '../../components/Icon';
import {styles} from './SearchStyle';
import {Colors} from '../../constants/Colors';
import PersonInList from '../../components/ui-kit/MesPersonInList';

export const Search = props => {
  const [selectedId, setSelectedId] = useState(null);

  const [text, setText] = useState('Поиск');
  const [person, setPerson] = useState(props.data);

  const renderItem = ({item}) => {
    return <PersonInList item={item} />;
  };

  const findItem = text => {
    setText(text);
    if (text != ' ') {
      setPerson(
        props.data.filter(person =>
          person.name.toLowerCase().includes(text.toLowerCase()),
        ),
      );
    } else {
      setPerson(props.data);
    }
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
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>Все</Text>
          <Text style={styles.itemText}>Люди</Text>
          <Text style={styles.itemText}>Сообщества</Text>
        </View>
        {/* <View style={styles.underLine} /> */}

        <View style={styles.lineContainer}>
          <View style={[styles.itemLine, {width: 31}]} />
          <View style={[styles.itemLine, {width: 46}]} />
          <View style={[styles.itemLine, {width: 92}]} />
        </View>
      </View>
      <FlatList
        data={person}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={1}
      />
    </SafeAreaView>
  );
};
