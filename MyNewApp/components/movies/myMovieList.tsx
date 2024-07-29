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

const MyMoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await getMyMovies();
        setMovies(fetchedMovies);
      } catch (error) {
        console.log('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const renderItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity
      onPress={() => router.push(`/movie-detail?id=${item.id}`)}
    >
      <View className="bg-gray-900 border-2 border-red-700 p-3 mb-2 rounded-lg w-[190px] mr-2">
        {item.poster_path ? (
          <>
            <Image
              source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
              className="h-[280px] w-[190px] rounded-xl mb-2"
            />
            <Text className="text-xl font-bold text-white">{item.title}</Text>
          </>
        ) : (
          <Text className="text-white">No image available</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="bg-gray-900 h-full p-4">
      <Text className="text-white text-2xl mb-2">My Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={({ id }) => id.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MyMoviesList;
