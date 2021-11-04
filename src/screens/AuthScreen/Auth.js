import React, {useRef} from 'react';
import WebView from 'react-native-webview';

const auth =
  'https://oauth.vk.com/authorize?client_id=7982997&display=mobile&redirect_uri=https://oauth.vk.com/blank.html&scope=friends,wall,photos&response_type=token&v=5.131&state=123456';

export const Auth = props => {
  const webWiew = useRef(null);
  const handleWebViewNavigationStateChange = newNavState => {
    const {url} = newNavState;
    if (!url) return;

    if (url.includes('https://oauth.vk.com/blank.html')) {
      webWiew.current.stopLoading();
      props.auth(url);
      props.showLoader();
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
