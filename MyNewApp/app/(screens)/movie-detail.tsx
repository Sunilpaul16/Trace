import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { fetchMovieDetail, postMyMovies } from '../../api';
import CustomButton from '../../components/button';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

type Movie = {
  id: number;
  title: string;
  release_date: string;
  releaseDate: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  runtime: number;
};

const MovieDetail = () => {
  const [data, setData] = useState<Movie | null>(null);
  const { id } = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      fetchMovieDetail(id)
        .then(json => setData(json))
        .catch(error => console.error('Failed to fetch movie details:', error));
    }
  }, [id]);

  const handleSaveMovie = async () => {
    if (data) {
      try {
        await postMyMovies(data);
        console.log('Movie saved successfully');
      } catch (error) {
        console.error('Failed to save movie:', error);
      }
    }
  };

  return (
    <SafeAreaView className="bg-slate-700 h-full">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View className="bg-slate-700">
          <Text className="text-3xl font-bold text-white mb-4">
            {data?.title}
          </Text>
          {data?.poster_path ? (
            <Image
              source={{ uri: `${IMAGE_BASE_URL}${data.poster_path}` }}
              className="h-[300px] w-[200px] rounded-xl mb-4"
              resizeMode="cover"
            />
          ) : (
            <Text className="text-white mb-4">No poster image available</Text>
          )}
          <CustomButton title={'Watchlist'} handlePress={handleSaveMovie} />
          <Text className="text-xl font-bold text-white mb-2">
            Release Date: {data?.release_date}
          </Text>
          <Text className="text-xl font-bold text-white mb-2">
            Rating: {data?.vote_average}
          </Text>
          <Text className="text-xl font-bold text-white mb-2">
            Runtime: {data?.runtime} mins
          </Text>
          <Text className="text-lg text-white">
            Overview:
            {data?.overview}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetail;