import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import {
  deleteGameFromMyGames,
  fetchGameDetail,
  Game,
  postMyGame,
  getMyGames
} from '../../API/gameAPI';
import { COVER_BASE_URL } from '../../config';
import CustomButton from '../../components/ui/button';

const GameDetail = () => {
  const [data, setData] = useState<Game | null>(null);
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (id) {
      fetchGameDetail(Number(id))
        .then(json => setData(json))
        .catch(error => console.error('Failed to fetch game details:', error));
      getMyGames()
        .then(savedGames => {
          const isGameSaved = savedGames.some(
            (game: { id: number }) => game.id === Number(id)
          );
          setIsSaved(isGameSaved);
        })
        .catch(error =>
          console.error('Failed to check if game is saved:', error)
        );
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
        console.error('Error saving game:', error);
      }
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900 p-4">
      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        {data && (
          <>
            <Text className="text-4xl font-bold text-white mb-4">
              {data.name}
            </Text>
            <View className="flex justify-center items-center mb-4">
              {data.cover?.image_id ? (
                <Image
                  source={{
                    uri: `${COVER_BASE_URL}${data.cover.image_id}.jpg`
                  }}
                  className="h-[300px] w-[200px] rounded-xl"
                />
              ) : (
                <Text className="text-white">No cover image available</Text>
              )}
            </View>
            <Text className="text-xl text-white mb-4">
              Release Date: {data.first_release_date}
            </Text>
            <Text className="text-lg text-white mb-4">{data.summary}</Text>
            <CustomButton
              title={isSaved ? 'Remove from My Games' : 'Save to My Games'}
              handlePress={handleSaveGame}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameDetail;
