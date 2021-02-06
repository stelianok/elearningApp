import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Lectures from '../screens/Lectures';
import MyCourses from '../screens/MyCourses';
import VideoLecture from '../screens/VideoLecture';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#6548A3'},
    }}>
    <App.Screen name="Login" component={Login} />
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Lectures" component={Lectures} />
    <App.Screen name="MyCourses" component={MyCourses} />
    <App.Screen name="VideoLecture" component={VideoLecture} />
  </App.Navigator>
);
export default AppRoutes;
