import { SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import HorizontalList from '../../components/books/myBookList';
import GetGames from '../../components/games/gameLIst';

type Games = {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
};
const Games = () => {
  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <GetGames />
      {/* <View className="bg-slate-400 h-40 border-2 border-red-600">
        <HorizontalList />
      </View> */}
    </SafeAreaView>
  );
};

export default Games;
