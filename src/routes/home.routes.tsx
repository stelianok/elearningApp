import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Lectures from '../screens/Lectures';
import VideoLecture from '../screens/VideoLecture';

const HomeStack = createStackNavigator();

const HomeRoutes: React.FC = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#6548A3'},
    }}>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Lectures" component={Lectures} />
    <HomeStack.Screen name="VideoLecture" component={VideoLecture} />
  </HomeStack.Navigator>
);

export default HomeRoutes;
