import { Tabs } from 'expo-router';

import {
  activeBookIcon,
  activeGameIcon,
  activeHomeIcon,
  activeMovieIcon,
  inactiveBookIcon,
  inactiveGameIcon,
  inactiveHomeIcon,
  inactiveMovieIcon
} from '../../assets/icons';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#e6a139',
        tabBarInactiveTintColor: '#e6a139',
        tabBarStyle: {
          backgroundColor: '#111827'
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabelStyle: { display: 'none' },

          headerShown: false,
          tabBarIcon: ({ focused}) =>
            focused ? activeHomeIcon : inactiveHomeIcon,
          tabBarLabel: 'Home'
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          tabBarLabelStyle: { display: 'none' },

          headerShown: false,
          tabBarIcon: ({ focused}) =>
            focused ? activeBookIcon : inactiveBookIcon,

          tabBarLabel: 'Books'
        }}
      />
      <Tabs.Screen
        name="games"
        options={{
          tabBarLabelStyle: { display: 'none' },

          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? activeGameIcon : inactiveGameIcon,
          tabBarLabel: 'Games'
        }}
      />
      <Tabs.Screen
        name="movies"
        options={{
          tabBarLabelStyle: { display: 'none' },
          headerShown: false,
          tabBarIcon: ({ focused}) =>
            focused ? activeMovieIcon : inactiveMovieIcon
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
