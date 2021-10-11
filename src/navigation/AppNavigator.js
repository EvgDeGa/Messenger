import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {HomeNavigator} from './SatckNavigator';

const AppNavigator = props => {
  // const isAuth = useSelector(state => !!state.auth.token);
  // const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);

  return (
    <NavigationContainer>
      <HomeNavigator />
      {/* {isAuth && <MainNavigator />}
        {!isAuth && didTryAutoLogin && <AuthNavigator />}
        {!isAuth && !didTryAutoLogin && <StartScreen />} */}
    </NavigationContainer>
  );
};

export default AppNavigator;
