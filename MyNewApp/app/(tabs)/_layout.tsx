import { Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="book" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="games"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="game-controller-outline" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="movies"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="movie-open-outline"
              size={24}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
