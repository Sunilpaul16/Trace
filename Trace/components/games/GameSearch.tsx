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
import { GAME_API_KEY } from '../../config';
import { cameraIcon, micIcon, crossIcon, searchIcon } from '../../assets/icons';
import { Game } from '../../API/typesFile';

const GameSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Game[]>([]);

  const searchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${GAME_API_KEY}&query=${searchQuery}`
    );
    const data = await response.json();
    setSearchResults(data.items || []);
  };

  const renderMovieItem = ({ item }: { item: Game }) => (
    <TouchableOpacity onPress={() => router.push(`/game-detail?id=${item.id}`)}>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Image
          source={{ uri: item.cover?.image_id }}
          style={{ width: 50, height: 75, marginRight: 10 }}
        />
        <View>
          <Text>{item.name}</Text>
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
          placeholder="Search games"
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

export default GameSearch;
