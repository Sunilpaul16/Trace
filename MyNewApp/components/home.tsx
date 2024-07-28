import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage = () => {
  return (
    <SafeAreaView className="bg-gray-900 h-full justify-center items-center">
      <View className="bg-gray-900 h-full justify-center items-center">
        <Text className="text-white text-2xl">Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
