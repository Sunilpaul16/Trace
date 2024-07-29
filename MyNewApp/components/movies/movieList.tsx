import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { fetchMovies } from '../../API/movieAPI';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { IMAGE_BASE_URL } from '../../config';

type Movie = {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
};

const GetMovies = () => {
  const [data, setData] = useState<Movie[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchMovies();
        setData(movies);
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, []);

  const renderItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity
      onPress={() => router.push(`/movie-detail?id=${item.id}`)}
    >
      <View className="bg-gray-900 border-2 border-red-700 p-4 mb-4 rounded-lg">
        <Text className="text-2xl font-bold text-white">{item.title}</Text>
        <Text className="text-lg text-white mb-2">
          {item.release_date.split('-')[0]} | Rating:{' '}
          {item.vote_average.toFixed(1)}
        </Text>
        {item.poster_path ? (
          <Image
            source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
            className="h-[200px] w-[150px] rounded-xl"
            resizeMode="cover"
          />
        ) : (
          <Text className="text-lg text-white">No poster available</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <FlatList
        data={data}
        keyExtractor={({ id }) => id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
        ListHeaderComponent={
          <Text className="text-4xl text-white font-bold mb-3 -mt-4 border-2 border-red-500">
            Movies
          </Text>
        }
      />
    </SafeAreaView>
  );
};

export default GetMovies;
