import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import {
  deleteGameFromMyGames,
  fetchGameDetail,
  postMyGame,
  getMyGames
} from '../../API/gameAPI';
import { COVER_BASE_URL } from '../../config';
import { GameNav } from '../../components/games/gameNav';
import { Game } from '../../API/typesFile';
import { arrowLeftIconLight } from '../../assets/icons';

export const storeNames: { [key: number]: string } = {
  13: 'Steam',
  16: 'Epic Games',
  1: 'Official',
  2: 'Wikia',
  3: 'Wikipedia',
  4: 'Facebook',
  5: 'Twitter',
  6: 'Twitch',
  8: 'Instagram',
  9: 'YouTube',
  10: 'iPhone',
  11: 'iPad',
  12: 'Android',
  14: 'Reddit',
  15: 'Itch',
  17: 'GOG',
  18: 'Discord'
};

const GameDetail = () => {
  const [data, setData] = useState<Game | null>(null);
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (id) {
      fetchGameDetail(Number(id))
        .then(json => setData(json))
        .catch(error => console.log('Failed to fetch game details:'));
      getMyGames()
        .then(savedGames => {
          const isGameSaved = savedGames.some(
            (game: { id: number }) => game.id === Number(id)
          );
          setIsSaved(isGameSaved);
        })
        .catch(error => console.log('Failed to check if game is saved:'));
    }
  }, [id]);

  const handleSaveGame = async () => {
    if (data) {
      try {
        if (isSaved) {
          await deleteGameFromMyGames(data.id);
        } else {
          await postMyGame(data);
        }
        setIsSaved(!isSaved);
      } catch (error) {
        console.log('Error saving game:', error);
      }
    }
  };

  const formatDate = (timestamp: number | undefined) => {
    if (!timestamp) return 'Unknown';
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative">
          <TouchableOpacity className="" onPress={() => router.back()}>
            {arrowLeftIconLight}
          </TouchableOpacity>
          <Image
            source={{ uri: `${COVER_BASE_URL}${data?.cover?.image_id}.jpg` }}
            className="w-full h-64 opacity-25"
            resizeMode="cover"
          />

          <View className="absolute bottom-0 left-4 right-4 flex-row items-end">
            <Image
              source={{ uri: `${COVER_BASE_URL}${data?.cover?.image_id}.jpg` }}
              className="w-24 h-36 rounded-lg"
            />
            <View className="ml-4 mb-2">
              <Text
                className="text-white text-2xl font-bold w-[300px]"
                numberOfLines={2}
              >
                {data?.name}
              </Text>
            </View>
          </View>
        </View>

        <View className="p-4">
          <GameNav isSaved={isSaved} handleSaveGame={handleSaveGame} />

          <View className="mb-4">
            <Text className="text-xl font-bold text-white mb-2">Platforms</Text>
            <View className="flex-row flex-wrap">
              {data?.platforms?.slice(0, 2).map(platform => (
                <Text
                  key={platform.name}
                  className="text-white mr-2 mb-2 px-2 py-1 bg-gray-800 rounded"
                >
                  {platform.name}
                </Text>
              ))}
            </View>
          </View>
          <View className="flex-row justify-between mb-4">
            <View className="rounded-full py-1 flex-row items-center">
              {[1, 2, 3, 4, 5].map(star => (
                <Text className="text-yellow-400" key={star}>
                  {star <= Math.round((data?.aggregated_rating ?? 0) / 10 / 2)
                    ? '★'
                    : '☆'}
                </Text>
              ))}
              <Text className="text-white ml-1 font-bold">
                {data?.aggregated_rating
                  ? (data.aggregated_rating / 10).toFixed(1)
                  : ''}
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-white ml-1">
                Release: {formatDate(data?.first_release_date)}
              </Text>
            </View>
          </View>

          <View className="mb-4">
            <Text className="text-xl font-bold text-white mb-2">
              Available in Stores
            </Text>
            <View className="flex-row flex-wrap">
              {data?.websites?.map(website => {
                const storeName = storeNames[website.category];
                return storeName ? (
                  <Text
                    key={website.url}
                    className="text-white mr-2 mb-2 px-2 py-1 bg-gray-800 rounded"
                  >
                    {storeName}
                  </Text>
                ) : null;
              })}
            </View>
          </View>

          <View className="mb-4">
            <Text className="text-xl font-bold text-white mb-2">Summary</Text>
            <Text className="text-white">{data?.summary}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameDetail;
