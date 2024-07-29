import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { fetchBooks } from '../../API/bookAPI';

type Book = {
  id: string;
  volumeInfo: {
    title: string;
    publishedDate: string;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
  };
};

const MyBooksList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const response = await fetchBooks();
        setBooks(response.items);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooksData();
  }, []);

  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity onPress={() => router.push(`/book-detail?id=${item.id}`)}>
      <View className="bg-gray-900 border-2 border-red-700 items-center p-3 mb-2 rounded-lg">
        <View className="mt-2">
          {item.volumeInfo.imageLinks?.thumbnail ? (
            <View>
              <Image
                source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
                className="h-[280px] w-[190px] rounded-xl"
              />
              <Text className="text-xl font-bold text-white">
                {item.volumeInfo.title}
              </Text>
            </View>
          ) : (
            <Text className="text-white">No image available</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="bg-gray-900 h-full">
      <FlatList
        data={books}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};
export default MyBooksList;
