import React from 'react';
import {Provider} from 'react-redux';
//import {NetInfo} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

//NetInfo.isConnected.addEventListener('connectionChange', console.log);
NetInfo.addEventListener(state => console.log(state));

import './config/reactotron';
import store from './store';

import RepositoryList from './components/RepositoryList';

const App = () => (
  <Provider store={store}>
    <RepositoryList />
  </Provider>
);

export default App;
