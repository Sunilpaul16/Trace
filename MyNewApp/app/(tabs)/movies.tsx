import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import GetMovies from '../../components/movies/movieList';

const App = () => {
  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <GetMovies />
    </SafeAreaView>
  );
};

export default App;
