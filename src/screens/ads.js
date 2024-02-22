import {Platform} from 'react-native';
export const Addsid = {
  ...Platform.select({
    android: {
      BANNER: 'ca-app-pub-3339897183017333/2128421980',
      Interstitial: 'ca-app-pub-3339897183017333/9651688788',
    },
    ios: {
      BANNER: 'ca-app-pub-3339897183017333/9372487181',
      Interstitial: 'ca-app-pub-3339897183017333/8686618153',
    },
  }),
};
