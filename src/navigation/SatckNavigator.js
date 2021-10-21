import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Settings from '../screens/SettingsScreen';
import Profile from '../screens/ProfileScreen';
import Friends from '../screens/FriendsScreen';
import Search from '../screens/SearchScreen';
import HomeContainer from '../screens/HomeScreen';
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
