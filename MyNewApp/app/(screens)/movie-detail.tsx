import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import {
  deleteMovieFromMyMovies,
  fetchMovieDetail,
  postMyMovies
} from '../../API/movieAPI';
import { IMAGE_BASE_URL } from '../../config';
import {
  arrowLeftIconLight,
  calendarIcon,
  clockIcon
} from '../../assets/icons';
import { MovieNav } from '../../components/movies/movieNav';

import { Movie } from '../../API/typesFile';
const MovieDetail = () => {
  const [data, setData] = useState<Movie | null>(null);
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (id) {
      fetchMovieDetail(id)
        .then(json => setData(json))
        .catch(error => console.log('Failed to fetch movie details:', error));
    }
  }, [id]);

  const handleSaveMovie = async () => {
    if (data) {
      try {
        if (isSaved) {
          await deleteMovieFromMyMovies(data.id);
          console.log('Movie removed successfully:', data.id);
          setIsSaved(false);
        } else {
          console.log('Attempting to save movie:');
          await postMyMovies(data);
          console.log('Movie saved successfully');
          setIsSaved(true);
        }
      } catch (error) {
        console.log(data);
        console.log('Failed to save/remove movie:', error);
      }
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative">
          <Image
            source={{ uri: `${IMAGE_BASE_URL}${data?.backdrop_path}` }}
            className="w-full h-64 opacity-25"
            resizeMode="cover"
          />
          <View className="absolute top-4 left-4 right-4 flex-row justify-between">
            <TouchableOpacity className="" onPress={() => router.back()}>
              {arrowLeftIconLight}
            </TouchableOpacity>
            {/* <TouchableOpacity>{closeIcon}</TouchableOpacity> */}
          </View>
          <View className="absolute bottom-0 left-4 right-4 flex-row items-end">
            <Image
              source={{ uri: `${IMAGE_BASE_URL}${data?.poster_path}` }}
              className="w-24 h-36 rounded-lg"
            />
            <View className="ml-4 mb-2">
              <Text
                className="text-white text-2xl font-bold w-[300px]"
                numberOfLines={2}
              >
                {data?.title}
              </Text>
            </View>
          </View>
        </View>

        <View className="p-4" />
        <MovieNav isSaved={isSaved} handleSaveMovie={handleSaveMovie} />
        <View className="mb-4">
          <Text className="text-xl font-bold text-white mb-2 p-3">Genres</Text>
          <View className="flex-row flex-wrap p-2">
            {data?.genres.map(genre => (
              <View
                key={genre.name}
                className="bg-gray-800 rounded-full px-3 py-1 mr-2 mb-2"
              >
                <Text className="text-white">{genre.name}</Text>
              </View>
            ))}
          </View>
          <View className="flex-row justify-between mb-4">
            <View className="text-white rounded-full px-3 py-1 flex-row items-center">
              <Text className="text-yellow-400 ml-1 font-bold">
                {[1, 2, 3, 4, 5].map(star =>
                  star <= Math.round((data?.vote_average ?? 0) / 10 / 2)
                    ? '★'
                    : '☆'
                )}
              </Text>
              <Text className="text-white ml-1">• {data?.vote_count}</Text>
            </View>
            <View className=" rounded-full px-3 py-1 flex-row items-center">
              {clockIcon}
              {/* <Text className="text-white ml-1">{Math.floor(data.runtime / 60)}h {data?.runtime !== undefined ? data?.runtime : 0}m</Text> */}
            </View>
            <View className="flex-row items-center">
              {calendarIcon}
              <Text className="text-white ml-1 p-2">
                Release: {data?.release_date}
              </Text>
            </View>
          </View>
          <View className="mb-4 p-3">
            <Text className="text-xl font-bold text-white mb-2">Overview</Text>
            <Text className="text-white">{data?.overview}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetail;
