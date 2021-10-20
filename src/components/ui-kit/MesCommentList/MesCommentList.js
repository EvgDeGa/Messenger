import React, {useState} from 'react';
import {FlatList, View} from 'react-native';

import Comment from '../MesComment';

export const CommentList = ({commentList}) => {
  const [selectedId, setSelectedId] = useState(null);

  const replace = () => {
    var data = commentList.filter(comment => comment.parent == null);
    // for (let i = 0; i < data.length; i++) {
    //   for (let j = 0; j < commentList.length; j++) {
    //     if (data[i].id == commentList[j].parent) {
    //       data[i].reply.push(commentList[j]);
    //     }
    //   }
    // }
    // console.log(data);
    return data;
  };

  const renderItem = ({item}) => {
    return <Comment item={item} reply={() => onPress} />;
  };

  return (
    // <View></View>
    <FlatList
      data={replace()}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  );
};
