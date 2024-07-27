import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { Game, fetchGames } from '../../API/gameAPI';

type Games = {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
};

const GetGames = () => {
  const [data, setData] = useState<Game[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getGames = async () => {
      try {
        const movies = await fetchGames();
        setData(movies);
      } catch (error) {
        console.error(error);
      }
    };
    getGames();
  }, []);

  const renderItem = ({ item }: { item: Game }) => (
    <TouchableOpacity
      onPress={() => router.push(`/movie-detail?id=${item.id}`)}
    >
      <View className="bg-slate-700 border-2 border-red-700 p-4 mb-4 rounded-lg">
        <Text className="text-2xl font-bold text-white">{item.title}</Text>
        <Text className="text-lg text-white"></Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="bg-slate-400 h-full">
      <FlatList
        data={data}
        keyExtractor={({ id }) => id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
};

export default GetGames;
