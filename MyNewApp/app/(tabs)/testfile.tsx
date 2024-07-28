import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import {
  deleteMovieFromMyMovies,
  fetchMovieDetail,
  postMyMovies
} from '../../API/movieAPI';
import CustomButton from '../../components/ui/button';
import { IMAGE_BASE_URL } from '../../config';

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
  const [isSaved, setIsSaved] = useState(false);

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
        console.error('Failed to save/remove movie:', error);
      }
    }
  };

  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View className="bg-gray-900">
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
          <Text className="text-xl font-bold text-white mb-2">
            Release Date: {data?.release_date}
          </Text>
          <Text className="text-xl font-bold text-white mb-2">
            Rating: {data?.vote_average}
          </Text>
          <Text className="text-xl font-bold text-white mb-2">
            Runtime: {data?.runtime} mins
          </Text>
          <Text className="text-lg text-white mb-4">
            Overview: {data?.overview}
          </Text>
          <CustomButton
            title={isSaved ? 'Remove from My Movies' : 'Save to My Movies'}
            handlePress={handleSaveMovie}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetail;
