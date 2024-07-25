import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import MY_API_KEY from '../../config';

const API_KEY = MY_API_KEY;
const POPULAR_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
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

const App = () => {
  const [data, setData] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch(POPULAR_API_URL);
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <>
            <Text>
              {item.title}, {item.release_date}, {item.vote_average}
            </Text>
            {item.backdrop_path ? (
              <Image
                source={{
                  uri: `${IMAGE_BASE_URL}${item.backdrop_path}`
                }}
                style={{ width: 300, height: 200 }}
              />
            ) : (
              <Text>No image available</Text>
            )}
            {item.poster_path ? (
              <Image
                source={{
                  uri: `${IMAGE_BASE_URL}${item.poster_path}`
                }}
                style={{ width: 300, height: 200 }}
              />
            ) : (
              <Text>No image available</Text>
            )}
            <Image source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }} />
          </>
        )}
      />
    </View>
  );
};

export default App;
