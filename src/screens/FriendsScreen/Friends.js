import React, {useState} from 'react';
import {FlatList, View, SafeAreaView} from 'react-native';

import {styles} from './FriendsStyle';

import BackHeader from '../../components/ui-kit/MesBackHeader';
import PersonInList from '../../components/ui-kit/MesPersonInList';

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
    </SafeAreaView>
  );
};
