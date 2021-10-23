import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {HomeNavigator, AuthNavigator} from './SatckNavigator';

const AppNavigator = props => {
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <NavigationContainer>
      {isAuth && <HomeNavigator />}
      {!isAuth && <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
