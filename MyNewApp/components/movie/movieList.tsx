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
        <Text className="text-lg text-white">
          {item.release_date}, {item.vote_average}
        </Text>
        <View className="mt-2">
          {item.poster_path ? (
            <Image
              source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
              className="h-[200px] w-[150px] rounded-xl"
            />
          ) : (
            <Text className="text-white">No image available</Text>
          )}
        </View>
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
      />
    </SafeAreaView>
  );
};

export default GetMovies;
