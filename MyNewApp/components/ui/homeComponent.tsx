import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyBooksList from '../books/myBookList';
import MyGamesList from '../games/myGameList';
import MyMoviesList from '../movies/myMovieList';
import SearchComponent from './SearchComponent';

const HomePage = () => {
  return (
    <SafeAreaView className="bg-gray-900 flex-1">
      <ScrollView className="flex-1">
        {/* <View className="p-4">
          <SearchComponent data={[]} />
        </View> */}

        <View className="px-4 mb-6">
          <Text className="text-white text-2xl font-semibold mb-2">
            My Movies
          </Text>
          <MyMoviesList />
        </View>

        <View className="px-4 mb-6">
          <Text className="text-white text-2xl font-semibold mb-2">
            My Games
          </Text>
          <MyGamesList />
        </View>
        <View className="px-4 mb-6">
          <Text className="text-white text-2xl font-semibold mb-2">
            My Books
          </Text>
          <MyBooksList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
