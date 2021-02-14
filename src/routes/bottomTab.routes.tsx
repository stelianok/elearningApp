import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createMaterialBottomTabNavigator();

import HomeRoutes from './home.routes';
import MyCourses from '../screens/MyCourses';

const BottomTabRoutes: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#FF6680"
    inactiveColor="#C4C4D1"
    barStyle={{
      backgroundColor: '#fff',
    }}>
    <Tab.Screen
      name="Home"
      component={HomeRoutes}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
      }}
    />
    <Tab.Screen
      name="MyCourses"
      component={MyCourses}
      options={{
        tabBarLabel: 'Salvos',
        tabBarIcon: ({color}) => <Icon name="heart" color={color} size={24} />,
      }}
    />
  </Tab.Navigator>
);

export default BottomTabRoutes;
