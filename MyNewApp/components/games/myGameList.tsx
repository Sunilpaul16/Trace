import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { Game, getMyGames } from '../../API/gameAPI';

type Games = {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
};
const HorizontalList = () => {
  const [Games, setMovies] = useState<Game[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const fetchedGames = await getMyGames();
        setMovies(fetchedGames);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  const renderItem = ({ item }: { item: Game }) => (
    <TouchableOpacity
      onPress={() => router.push(`/movie-detail?id=${item.id}`)}
    >
      <View className="bg-slate-700 border-2 border-red-700 items-center p-3 mb-2 rounded-lg">
        <View className="mt-2"></View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View className="bg-slate-400 h-full">
      <Text className="text-white text-2xl mt-2">My Games</Text>
      <FlatList
        data={Games}
        keyExtractor={({ id }) => id.toString()}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default HorizontalList;
