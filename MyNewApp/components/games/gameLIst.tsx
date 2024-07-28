import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { fetchGames, Game } from '../../API/gameAPI';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import { COVER_BASE_URL } from '../../config';

const GetGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getGames = async () => {
      try {
        const games = await fetchGames();
        setGames(games);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
    getGames();
  }, []);

  const renderItem = ({ item }: { item: Game }) => (
    <TouchableOpacity onPress={() => router.push(`/game-detail?id=${item.id}`)}>
      <View className="bg-slate-700 border-2 border-red-700 p-4 mb-4 rounded-lg">
        <Text className="text-2xl font-bold text-white">{item.name}</Text>
        {item.cover && item.cover.image_id ? (
          <Image
            source={{ uri: `${COVER_BASE_URL}${item.cover.image_id}.jpg` }}
            className="h-[200px] w-[150px] rounded-xl"
            resizeMode="cover"
          />
        ) : (
          <Text className="text-lg text-white">No cover available</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ backgroundColor: 'slategray', flex: 1 }}>
      <FlatList
        data={games}
        keyExtractor={({ id }) => id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
};

export default GetGames;
