import { Tabs } from 'expo-router';

import {
  homeIcon,
  bookIcon,
  gameIcon,
  movieIcon,
  settingIcon
} from '../../assets/icons';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF0000',
        tabBarStyle: {
          backgroundColor: '#111827'
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => homeIcon
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => bookIcon
        }}
      />
      <Tabs.Screen
        name="games"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => gameIcon
        }}
      />
      <Tabs.Screen
        name="movies"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => movieIcon
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
