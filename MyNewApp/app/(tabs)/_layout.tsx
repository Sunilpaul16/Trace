import { View, Text } from 'react-native';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
    </Tabs>
  );
};

export default TabsLayout;
