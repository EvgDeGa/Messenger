import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import Menu from '../../components/HomeModal/Menu';

import styles from './HomeStyle';

export const Home = ({}) => {
  const [menu, setMenu] = useState(true);

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{width: '100%'}}
        activeOpacity={0}
        onPress={() => setMenu(true)}>
        <Menu visible={menu} onCancel={() => setMenu(false)} />
        <Text>Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
