import { Text, View } from 'react-native';
import React from 'react';
import HomePage from '../../components/ui/home';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchComponent from '../../components/ui/SearchComponent';

const Home = () => {
  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <View className="bg-gray-900 p-2 -mt-3 h-20 border-2 border-red-500">
        <SearchComponent data={[]} />
      </View>
      <HomePage />
    </SafeAreaView>
  );
};

export default Home;
