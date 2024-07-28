import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { getMyMovies } from '../../API/movieAPI';
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

const HorizontalList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await getMyMovies();
        setMovies(fetchedMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const renderItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity
      onPress={() => router.push(`/movie-detail?id=${item.id}`)}
    >
      <View className="bg-slate-700 border-2 border-red-700 items-center p-3 mb-2 rounded-lg">
        <View className="mt-2">
          {item.poster_path ? (
            <View>
              <Image
                source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
                className="h-[280px] w-[190px] rounded-xl"
              />
              <Text className="text-xl font-bold text-white">{item.title}</Text>
            </View>
          ) : (
            <Text className="text-white">No image available</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="bg-slate-400 h-full">
      <Text className="text-white text-2xl mt-2">My Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={({ id }) => id.toString()}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default HorizontalList;
