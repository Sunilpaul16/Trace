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
import { MY_BOOK_API_KEY } from '../../config';
import { searchIcon, crossIcon, micIcon, cameraIcon } from '../../assets/icons';
import { Book } from '../../API/typesFile';

const BookSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Book[]>([]);

  const searchBooks = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${MY_BOOK_API_KEY}`
    );
    const data = await response.json();
    setSearchResults(data.items || []);
  };

  const renderBookItem = ({ item }: { item: Book }) => (
    <TouchableOpacity onPress={() => router.push(`/book-detail?id=${item.id}`)}>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Image
          source={{ uri: item.volumeInfo.imageLinks?.thumbnail }}
          style={{ width: 50, height: 75, marginRight: 10 }}
        />
        <View>
          <Text>{item.volumeInfo.title}</Text>
          <Text>{item.volumeInfo.authors?.join(', ')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 ">
      <View className="m-1 bg-gray-200 rounded-3xl shadow-md flex-row items-center">
        <TouchableOpacity className="p-3">{searchIcon}</TouchableOpacity>
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search books"
          onSubmitEditing={searchBooks}
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
        renderItem={renderBookItem}
        keyExtractor={item => item.id}
        className="bg-gray-700 rounded-md"
      />
    </View>
  );
};

export default BookSearch;
