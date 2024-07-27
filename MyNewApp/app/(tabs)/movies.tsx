import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HorizontalList from '../../components/movie/myMovieList';
import GetMovies from '../../components/movie/movieList';
import { View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView className="bg-slate-400 h-full">
      <GetMovies />
      <View className="bg-slate-400 h-40 border-2 border-red-600">
        <HorizontalList />
      </View>
    </SafeAreaView>
  );
};

export default App;
