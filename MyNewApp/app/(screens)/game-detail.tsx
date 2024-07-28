import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchGameDetail, Game, postMyGame } from '../../API/gameAPI';
import { useLocalSearchParams } from 'expo-router';
import { COVER_BASE_URL } from '../../config';

const GameDetail = () => {
  const [data, setData] = useState<Game | null>(null);
  const { id } = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      fetchGameDetail(Number(id))
        .then(json => setData(json))
        .catch(error => console.error('Failed to fetch game details:', error));
    }
  }, [id]);

  const handleSaveGame = async () => {
    if (data) {
      try {
        await postMyGame(data);
        console.log('Game saved successfully');
      } catch (error) {
        console.error('Failed to save game:', error);
      }
    }
  };

  if (!data) {
    return (
      <SafeAreaView className="bg-slate-700 h-full justify-center items-center">
        <Text className="text-white text-xl">Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-slate-700 h-full">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View className="bg-slate-700">
          {data.cover && data.cover.image_id ? (
            <Image
              source={{ uri: `${COVER_BASE_URL}${data.cover.image_id}.jpg` }}
              className="h-[300px] w-[200px] rounded-xl self-center mb-4"
              resizeMode="cover"
            />
          ) : (
            <View className="h-[300px] w-[200px] bg-slate-600 rounded-xl self-center mb-4 justify-center items-center">
              <Text className="text-lg text-white">No cover available</Text>
            </View>
          )}
          <Text className="text-3xl font-bold text-white mb-4">
            {data.name}
          </Text>
          {data.aggregated_rating && (
            <Text className="text-xl text-white mb-2">
              Rating: {data.aggregated_rating.toFixed(1)}/100
            </Text>
          )}
          {data.first_release_date && (
            <Text className="text-xl text-white mb-2">
              Release Date:{' '}
              {new Date(data.first_release_date * 1000).toLocaleDateString()}
            </Text>
          )}
          {data.summary && (
            <Text className="text-lg text-white mb-4">{data.summary}</Text>
          )}
          {data.storyline && (
            <>
              <Text className="text-2xl font-bold text-white mb-2">
                Storyline
              </Text>
              <Text className="text-lg text-white mb-4">{data.storyline}</Text>
            </>
          )}
          <TouchableOpacity
            onPress={handleSaveGame}
            className="bg-blue-500 py-3 px-6 rounded-full self-center mt-4"
          >
            <Text className="text-white font-bold text-lg">Save Game</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameDetail;
