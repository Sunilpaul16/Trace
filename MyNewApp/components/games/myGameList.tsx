import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { getMyGames, Game } from '../../API/gameAPI';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HorizontalList = () => {
  const [games, setGames] = useState<Game[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const fetchedGames = await getMyGames();
        setGames(fetchedGames);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  const renderItem = ({ item }: { item: Game }) => (
    <TouchableOpacity onPress={() => router.push(`/game-detail?id=${item.id}`)}>
      <View className="bg-gray-900 border-2 border-red-700 items-center p-3 mb-2 rounded-lg">
        <Text className="text-2xl text-white">{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="bg-gray-800 h-full">
      <View className="bg-slate-400 h-full">
        <Text className="text-white text-2xl mt-2">My Games</Text>
        <FlatList
          data={games}
          keyExtractor={({ id }) => id.toString()}
          renderItem={renderItem}
          horizontal
          contentContainerStyle={{ padding: 16 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HorizontalList;
