import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import MY_API_KEY from '../../config';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_KEY = MY_API_KEY;
const MOVIE_DETAIL_API_URL = `https://api.themoviedb.org/3/movie/1022789?api_key=${API_KEY}`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

type Movie = {
  id: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  runtime: number;
};
const MovieDetail = () => {
  const [data, setData] = useState<Movie | null>(null);

  const getMovies = async () => {
    try {
      const response = await fetch(MOVIE_DETAIL_API_URL);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SafeAreaView className="bg-slate-700 h-full">
      <ScrollView contentContainerStyle={{}}>
        <View className="w-full justify-center min-h-full px-4 ">
          <Text className="text-3xl font-bold ">{data?.title}</Text>
          {/* {data?.backdrop_path ? (
            <Image
              source={{ uri: `${IMAGE_BASE_URL}${data.backdrop_path}` }}
              className="h-[300px] w-[screen.width]"
            />
          ) : (
            <Text>No backdrop image available</Text>
          )} */}
          {data?.poster_path ? (
            <Image
              source={{ uri: `${IMAGE_BASE_URL}${data.poster_path}` }}
              className="h-[300px] w-[200px] rounded-xl  "
              resizeMode="cover"
            />
          ) : (
            <Text>No poster image available</Text>
          )}
          <Text className="text-3xl font-bold">{data?.title}</Text>
          <Text className="text-3xl font-bold">{data?.release_date}</Text>
          <Text className="text-3xl font-bold">{data?.vote_average}</Text>
          <Text className="text-3xl font-bold">{data?.runtime}</Text>
          <Text className="text-3xl font-bold">{data?.overview}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetail;
