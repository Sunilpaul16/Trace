import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { fetchMovies } from '../../api';
import { SafeAreaView } from 'react-native-safe-area-context';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

type Movie = {
  id: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
};

const GetMovies = () => {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies();
      setData(movies);
    };
    getMovies();
  }, []);
  return (
    <SafeAreaView className="bg-slate-700 h-full">
      <ScrollView contentContainerStyle={{}}>
        <View className="bg-slate-700">
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            // horizontal={true}
            renderItem={({ item }) => (
              <>
                <View className="bg-slate-700 border-2 border-red-700">
                  <Text className="text-2xl font-bold">{item.title}</Text>
                  <View className="bg-slate-700 border-2 border-green-700"></View>
                  <Text className="text-1xl font-bold space-x-1 row-auto">
                    {item.release_date}, {item.vote_average}
                  </Text>

                  <View className="bg-slate-700 border-2 border-blue-700">
                    <Text className="text-2xl font-bold flex-1 float-left">
                      Rating
                    </Text>
                    {item.poster_path ? (
                      <Image
                        source={{
                          uri: `${IMAGE_BASE_URL}${item.poster_path}`
                        }}
                        className="h-[300px] w-[200px] rounded-xl  "
                      />
                    ) : (
                      <Text>No image available</Text>
                    )}
                    <Image />
                  </View>
                </View>
              </>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GetMovies;
