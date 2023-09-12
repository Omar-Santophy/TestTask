import React from 'react';
import {Provider} from 'react-redux';
import {PaperProvider} from 'react-native-paper';
import axios from 'axios';
import AppNavigation from './src/navigations/AppNavigation';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';

const App = () => {
  const baseurl = 'http://localhost:3000/';
  axios.defaults.baseURL = baseurl;
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
