import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import AppRoutes from './routes/app.routes';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
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
