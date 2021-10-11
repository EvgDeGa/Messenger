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

export const Home = props => {
  const [menu, setMenu] = useState(false);

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{width: '100%'}}
        activeOpacity={0}
        onPress={() => setMenu(true)}>
        <Menu
          visible={menu}
          onCancel={() => setMenu(false)}
          navigation={props.navigation}
        />
        <Text>
          НАЖМИТЕ НА ТЕКСТ, ЧТО БЫ ОТКРЫТЬ МЕНЮ, РАБОАТЕТ ТОЛЬКО ПРОФИЛЬ В МЕНЮ
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
