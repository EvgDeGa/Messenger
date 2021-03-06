import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Settings from '../screens/SettingsScreen';
import Profile from '../screens/ProfileScreen';
import Friends from '../screens/FriendsScreen';
import Search from '../screens/SearchScreen';
import Home from '../screens/HomeScreen';
import Auth from '../screens/AuthScreen';

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
      <HomeStackNavigator.Screen name="Auth" component={Auth} />
    </HomeStackNavigator.Navigator>
  );
};

const AuthStackNavigator = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStackNavigator.Screen name="Auth" component={Auth} />
    </AuthStackNavigator.Navigator>
  );
};
