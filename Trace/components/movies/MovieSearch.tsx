import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import { router } from 'expo-router';
import { BACKEND_URL, IMAGE_BASE_URL } from '../../config';
import { searchIcon, crossIcon, micIcon, cameraIcon } from '../../assets/icons';
import { Movie } from '../../API/typesFile';

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const searchMovies = async () => {
    const response = await fetch(
      `${BACKEND_URL}/movies/search?q=${encodeURIComponent(searchQuery)}`
    );
    const data = await response.json();
    setSearchResults(Array.isArray(data) ? data : []);
  };

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity
      onPress={() => router.push(`/movie-detail?id=${item.id}`)}
    >
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
          style={{ width: 50, height: 75, marginRight: 10 }}
        />
        <View>
          <Text>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 ">
      <View className="m-1 bg-white rounded-full shadow-md flex-row items-center">
        <TouchableOpacity className="p-3">{searchIcon}</TouchableOpacity>
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search movies"
          onSubmitEditing={searchMovies}
          className="flex-1 py-2 px-3"
        />
        {searchQuery !== '' && (
          <TouchableOpacity onPress={() => setSearchQuery('')} className="p-3">
            {crossIcon}
          </TouchableOpacity>
        )}
        <TouchableOpacity className="p-3">{micIcon}</TouchableOpacity>
        <TouchableOpacity className="p-3">{cameraIcon}</TouchableOpacity>
      </View>
      <FlatList
        data={searchResults}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id.toString()}
        className="bg-gray-700 rounded-md"
      />
    </View>
  );
};

export default MovieSearch;
