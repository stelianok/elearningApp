import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/Feather';

const Tab = createMaterialTopTabNavigator();

import HomeRoutes from './home.routes';
import MyCourses from '../screens/MyCourses';
import Home from '../screens/Home';

const BottomTabRoutes: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarPosition="bottom"
    tabBarOptions={{
      activeTintColor: '#FF6680',
      inactiveTintColor: '#C4C4D1',
      showIcon: true,
      labelStyle: {
        position: 'relative',
        fontFamily: 'Rubik',
        fontSize: 18,
        textTransform: 'none',

        bottom: 20,
        left: 5,
      },
      style: {
        height: 60,
      },
      iconStyle: {
        right: 40,
        top: 8,
      },
      indicatorStyle: {
        top: 0,
        backgroundColor: '#FF6680',
      },
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
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
