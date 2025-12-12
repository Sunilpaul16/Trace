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
import { GAME_API_KEY, GAME_ACCESS_TOKEN, GAME_BASE_URL, COVER_BASE_URL } from '../../config';
import { cameraIcon, micIcon, crossIcon, searchIcon } from '../../assets/icons';
import { Game } from '../../API/typesFile';

const GameSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Game[]>([]);

  const searchGames = async () => {
    const response = await fetch(GAME_BASE_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': GAME_API_KEY,
        Authorization: `Bearer ${GAME_ACCESS_TOKEN}`
      },
      body: `fields name,cover.image_id; search "${searchQuery}"; limit 10;`
    });
    const data = await response.json();
    setSearchResults(Array.isArray(data) ? data : []);
  };

  const renderMovieItem = ({ item }: { item: Game }) => (
    <TouchableOpacity onPress={() => router.push(`/game-detail?id=${item.id}`)}>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Image
          source={{ uri: item.cover ? `${COVER_BASE_URL}${item.cover.image_id}.jpg` : undefined }}
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
          onSubmitEditing={searchGames}
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
