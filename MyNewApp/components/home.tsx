import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView className="bg-gray-900 h-full justify-center items-center">
      <FlatList
        data={[{ id: '1' }, { id: '2' }, { id: '3' }]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text className="text-3xl">{item.id}</Text>}
      />
    </SafeAreaView>
  );
};

export default Home;
