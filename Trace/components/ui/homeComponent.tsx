import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyBooksList from '../books/myBookList';
import MyGamesList from '../games/myGameList';
import MyMoviesList from '../movies/myMovieList';

const HomePage = () => {
  return (
    <SafeAreaView className="bg-gray-900 flex-1">
      <ScrollView className="flex-1">
        <View className="h-40  rounded-lg mx-4 mb-6" />
        <View className=" mb-6">
          <Text className="text-orange-400 text-2xl font-semibold mb-2 px-4">
            My Movies
          </Text>
          <MyMoviesList />
        </View>

        <View className=" mb-6">
          <Text className="text-orange-400 text-2xl font-semibold mb-2 px-4">
            My Games
          </Text>
          <MyGamesList />
        </View>
        <View className="mb-6">
          <Text className="text-orange-400 text-2xl font-semibold mb-2 px-4">
            My Books
          </Text>
          <MyBooksList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
