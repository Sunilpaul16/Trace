import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { getMyMovies } from '../../API/movieAPI';
import { useRouter } from 'expo-router';
import { IMAGE_BASE_URL } from '../../config';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

const MyMoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await getMyMovies();
        console.log('Fetched movies in component:');
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
      <View className="mr-4 mb-2">
        {item.poster_path ? (
          <>
            <Image
              source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
              className="h-[150px] w-[100px] rounded-lg"
            />
            <Text
              className="text-sm font-bold text-white mt-1 w-[100px]"
              numberOfLines={2}
            >
              {item.title}
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
      data={movies}
      keyExtractor={({ id }) => id.toString()}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default MyMoviesList;
