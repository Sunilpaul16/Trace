import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { fetchGames } from '../../API/gameAPI';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { COVER_BASE_URL } from '../../config';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameSearch from './GameSearch';
import { Game } from '../../API/typesFile';

const GetGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getGames = async () => {
      try {
        const games = await fetchGames();
        setGames(games);
      } catch (error) {
        console.log('Error fetching games:', error);
      }
    };
    getGames();
  }, []);

  const renderItem = ({ item }: { item: Game }) => (
    <TouchableOpacity onPress={() => router.push(`/game-detail?id=${item.id}`)}>
      <View className="bg-gray-900 p-4 mb-4 rounded-lg flex-row">
        <View className="mr-4">
          {item.cover && item.cover.image_id ? (
            <Image
              source={{ uri: `${COVER_BASE_URL}${item.cover.image_id}.jpg` }}
              className="h-[200px] w-[150px] rounded-xl"
              resizeMode="cover"
            />
          ) : (
            <View className="h-[200px] w-[150px] bg-gray-700 rounded-xl flex items-center justify-center">
              <Text className="text-white text-center">No cover available</Text>
            </View>
          )}
        </View>
        <View className="flex-1 justify-between">
          <View className=" p-2 rounded mb-2">
            <Text className="text-2xl font-bold text-white" numberOfLines={2}>
              {item.name}
            </Text>
          </View>
          <View className="p-2 rounded">
            <Text className="text-white text-lg">
              Ratings: {item.aggregated_rating}
            </Text>
          </View>
          <View className=" p-2 rounded">
            <Text className="text-lg text-white">Details</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <FlatList
        data={games}
        keyExtractor={({ id }) => id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 7 }}
        ListHeaderComponent={
          <>
            <View>
              <Text className="text-4xl text-orange-400 justify-center text-center font-bold -mt-2 ">
                Games
              </Text>
            </View>
            <View className="bg-gray-900 p-2 rounded-lg ">
              <GameSearch />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default GetGames;
