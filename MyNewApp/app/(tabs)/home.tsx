import { View, Text } from 'react-native';
import React from 'react';
import HomePage from '../../components/ui/HomeComponent';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <View className="bg-gray-900 h-full">
        <HomePage />
      </View>
    </SafeAreaView>
  );
};

export default Home;
