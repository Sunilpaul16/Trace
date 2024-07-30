import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import { Book } from '../../API/bookAPI';
import { router } from 'expo-router';
import { MY_BOOK_API_KEY } from '../../config';

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
    <View style={{ flex: 1 }}>
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search books"
        onSubmitEditing={searchBooks}
        style={{ padding: 10, borderBottomWidth: 1 }}
      />
      <FlatList
        data={searchResults}
        renderItem={renderBookItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default BookSearch;
