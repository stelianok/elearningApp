import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import AppRoutes from './routes/app.routes';
import {NavigationContainer} from '@react-navigation/native';
const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#6548A3" />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </>
  );
};

export default App;
