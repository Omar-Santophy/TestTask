import React from 'react';
import {Provider} from 'react-redux';
import {PaperProvider} from 'react-native-paper';
import axios from 'axios';
import AppNavigation from './src/navigations/AppNavigation';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';

const App = () => {
  const baseurl = 'https://dummyapi.io/data/v1/';
  axios.defaults.baseURL = baseurl;
  axios.defaults.headers["app-id"]="650039280d712c5e17998c8d"
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <AppNavigation />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
