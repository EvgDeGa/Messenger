import React from 'react';
import {View} from 'react-native';
import {Colors} from './src/constants/Colors';
import CommentList from './src/components/ui-kit/MesCommentList';
import Profile from './src/screens/ProfileScreen';
import Home from './src/screens/HomeScreen';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
    // <Home />
    // <Profile data={DATAPROFILE} />
    // <View style={{backgroundColor: Colors.ULTRAMARINE_BLUE, padding: 17}}>
    //   <CommentList commentList={DATA.commentList} />
    // </View>
  );
}
