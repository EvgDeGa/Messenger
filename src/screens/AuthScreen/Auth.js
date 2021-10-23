import React, {useRef} from 'react';
import {Text, TouchableOpacity, View, Linking} from 'react-native';
import WebView from 'react-native-webview';

const auth =
  'https://oauth.vk.com/authorize?client_id=7982147&display=mobile&redirect_uri=https://oauth.vk.com/blank.html&scope=friends,wall&response_type=token&v=5.131&state=123456';

export const Auth = props => {
  const webWiew = useRef(null);
  const handleWebViewNavigationStateChange = newNavState => {
    const {url} = newNavState;
    if (!url) return;

    if (url.includes('https://oauth.vk.com/blank.html#access_token')) {
      webWiew.current.stopLoading();
      props.auth(url);
    }
  };

  return (
    <WebView
      ref={webWiew}
      source={{uri: auth}}
      onNavigationStateChange={handleWebViewNavigationStateChange}
    />
  );
};
