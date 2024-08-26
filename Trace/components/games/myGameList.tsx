import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { getMyGames } from '../../API/gameAPI';
import { COVER_BASE_URL } from '../../config';
import { Game } from '../../API/typesFile';

const MyGamesList = () => {
  const [games, setGames] = useState<Game[]>([]);

  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const fetchedGames = await getMyGames();
        console.log('Fetched games in component:');
        setGames(fetchedGames);
      } catch (error) {
        console.log('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  const renderItem = ({ item }: { item: Game }) => (
    <TouchableOpacity onPress={() => router.push(`/game-detail?id=${item.id}`)}>
      <View className="mr-4 mb-2">
        {item.cover?.image_id ? (
          <>
            <Image
              source={{ uri: `${COVER_BASE_URL}${item.cover.image_id}.jpg` }}
              className="h-[150px] w-[100px] rounded-lg"
            />
            <Text
              className="text-sm font-bold text-white mt-1 w-[100px]"
              numberOfLines={2}
            >
              {item.name}
            </Text>
          </>
        ) : (
          <View className="h-[150px] w-[100px] bg-gray-800 rounded-lg justify-center items-center">
            <Text className="text-white text-center">No image</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={games}
      keyExtractor={({ id }) => id.toString()}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default MyGamesList;
