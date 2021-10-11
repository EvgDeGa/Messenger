import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../screens/SettingsScreen';
import Profile from '../screens/ProfileScreen/index';
import Friends from '../screens/FriendsScreen';
import Search from '../screens/SearchScreen';
import Home from '../screens/HomeScreen';

const HomeStackNavigator = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStackNavigator.Screen name="Home" component={Home} />
      <HomeStackNavigator.Screen name="Profile" component={Profile} />
      <HomeStackNavigator.Screen name="Friends" component={Friends} />
      <HomeStackNavigator.Screen name="Search" component={Search} />
      <HomeStackNavigator.Screen name="Settings" component={Settings} />
    </HomeStackNavigator.Navigator>
  );
};

const DATA = {
  postID: '1',
  commentList: [
    {
      commetHolder: 'Kat Williams',
      body: '1User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
      image: null,
      date: '25 сен. в 22:12 ',
      id: '5a01231d-3ee9-4bf6-9a12450-462a8277898a',
      like: '12',
      parent: null,
      reply: [
        {
          commetHolder: 'Kat Williams',
          body: '2User experience design for the Web (and its siblings.',
          image: null,
          date: '25 сен. в 22:12 ',
          id: '514aa634-08bd-4ca3-8a1a-eb10846808ed',
          parent: '5a0123114244d-3ee9-4bf6-9a50-462a8277898a',
          like: '12',
          reply: [],
        },
        {
          commetHolder: 'Kat Williams',
          body: '3User experience design for the Web (and its siblings.',
          image: null,
          date: '25 сен. в 22:12 ',
          id: '514aa634-08bd-s4ca3-8a1a-eb1012846808ed',
          parent: '5a01231d-3ee9-4bf6-9a50-462a827784498a',
          like: '12',
          reply: [],
        },
      ],
    },
    {
      commetHolder: 'Kat Williams',
      body: null,
      image: require('../../assets/img/CommentPhoto.png'),
      date: '25 сен. в 22:12 ',
      id: '01793ef41-fdb6-4700-a4dc-6d7bbc54385a',
      like: '12',
      parent: null,
      reply: [],
    },
    {
      commetHolder: 'Kat Williams',
      body: '4User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
      image: null,
      date: '25 сен. в 22:12 ',
      id: '1ef06878-58b5-48b0-9349-73986ab616bb4',
      like: '12',
      parent: null,
      reply: [],
    },
    {
      commetHolder: 'Kat Williams',
      body: '5User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
      image: require('../../assets/img/CommentPhoto.png'),
      date: '25 сен. в 22:12 ',
      id: '1ef06878-58b5-481b0-9349-73986ab66bb4',
      like: '12',
      parent: null,
      reply: [],
    },
  ],
};
