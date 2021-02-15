import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Lectures from '../screens/Lectures';
import VideoLecture from '../screens/VideoLecture';

import BottomTabRoutes from './bottomTab.routes';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#6548A3'},
    }}>
    <App.Screen name="Login" component={Login} />
    <App.Screen name="Lectures" component={Lectures} />
    <App.Screen name="VideoLecture" component={VideoLecture} />
    <App.Screen name="MainRoutes" component={BottomTabRoutes} />
  </App.Navigator>
);
export default AppRoutes;
