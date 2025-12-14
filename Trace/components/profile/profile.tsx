import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { userIcon } from '../../assets/icons';
import MyBooksList from '../books/myBookList';
import MyGamesList from '../games/myGameList';

const profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView className="flex-1">
        <View className="items-center py-8 px-4">
          <TouchableOpacity className="mb-4">{userIcon}</TouchableOpacity>
          <Text className="text-white text-2xl font-bold">Your Profile</Text>
        </View>

        <View className="mb-6">
          <Text className="text-orange-400 text-2xl font-semibold mb-2 px-4">My Games</Text>
          <MyGamesList />
        </View>

        <View className="mb-6">
          <Text className="text-orange-400 text-2xl font-semibold mb-2 px-4">My Books</Text>
          <MyBooksList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
