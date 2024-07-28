import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import GetGames from '../../components/games/gameLIst';

const Games = () => {
  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <GetGames />
    </SafeAreaView>
  );
};

export default Games;
