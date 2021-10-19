import React, {useState} from 'react';
import {FlatList} from 'react-native';

import Comment from '../MesComment';

export const CommentList = ({commentList}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return <Comment item={item} reply={() => onPress} />;
  };

  return (
    <FlatList
      data={commentList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  );
};
