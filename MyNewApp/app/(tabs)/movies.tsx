import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import GetMovies from '../../components/movies/movieList';
import SearchComponent from '../../components/ui/SearchComponent';
import { View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <View className="bg-gray-900 p-2 -mt-3 h-20 border-2 border-red-500">
        <SearchComponent data={[]} />
      </View>
      <GetMovies />
    </SafeAreaView>
  );
};

export default App;
