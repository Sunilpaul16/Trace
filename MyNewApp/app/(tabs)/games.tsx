import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import GetGames from '../../components/games/gameLIst';
import { View } from 'react-native';
import SearchComponent from '../../components/ui/SearchComponent';

const Games = () => {
  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <View className="bg-gray-900 p-2 -mt-3 h-20 ">
        {/* <SearchComponent data={[]} /> */}
      </View>
      <GetGames />
    </SafeAreaView>
  );
};

export default Games;
