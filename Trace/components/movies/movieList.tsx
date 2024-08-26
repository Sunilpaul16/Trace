import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { fetchMovies } from '../../API/movieAPI';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { IMAGE_BASE_URL } from '../../config';
import MovieSearch from './MovieSearch';
import { Movie } from '../../API/typesFile';

const GetMovies = () => {
  const [data, setData] = useState<Movie[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchMovies();
        setData(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  const renderItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity
      onPress={() => router.push(`/movie-detail?id=${item.id}`)}
    >
      <View className="bg-gray-900 p-4 mb-4 rounded-lg flex-row">
        <View className="mr-4">
          {item.poster_path ? (
            <Image
              source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
              className="h-[200px] w-[150px] rounded-xl"
              resizeMode="cover"
            />
          ) : (
            <View className="h-[200px] w-[150px] bg-gray-700 rounded-xl flex items-center justify-center">
              <Text className="text-white text-center">
                No poster available
              </Text>
            </View>
          )}
        </View>
        <View className="flex-1 justify-between">
          <View className=" p-2 rounded mb-2">
            <Text className="text-2xl font-bold text-white" numberOfLines={2}>
              {item.title}
            </Text>
          </View>
          <View className="p-2 rounded">
            <Text className="text-white text-lg">
              Ratings: {item.vote_average}
            </Text>
          </View>
          <View className=" p-2 rounded">
            <Text className="text-lg text-white">Details</Text>
          </View>
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
        contentContainerStyle={{ padding: 7 }}
        ListHeaderComponent={
          <>
            <Text className="text-4xl text-orange-400 justify-center text-center font-bold -mt-2 ">
              Movies
            </Text>
            <View className="bg-gray-900 p-2 rounded-lg ">
              <MovieSearch />
            </View>
            <View></View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default GetMovies;
