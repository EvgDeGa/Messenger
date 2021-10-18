import React, {useState} from 'react';
import {
  FlatList,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import BackHeader from '../../components/ui-kit/MesBackHeader';
import PersonInList from '../../components/ui-kit/MesPersonInList';
import {Colors} from '../../constants/Colors';
import {styles} from './FriendsStyle';

export const Friends = props => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return <PersonInList item={item} />;
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <BackHeader back={() => props.navigation.goBack()} text={'Друзья'} />
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          numColumns={1}
        />
      </View>
      {/* <View style={styles.footerBlock} /> */}
    </SafeAreaView>
  );
};
