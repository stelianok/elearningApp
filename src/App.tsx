import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import Login from './screens/Login';
const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#6548A3" />
      <Login />
    </>
  );
};

export default App;
