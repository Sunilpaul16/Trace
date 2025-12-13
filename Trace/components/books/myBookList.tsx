import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useFocusEffect, useRouter } from 'expo-router';
import { getMyBooks } from '../../API/bookAPI';
import { Book } from '../../API/typesFile';

const MyBooksList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      const fetchBooks = async () => {
        try {
          const response = await getMyBooks();
          setBooks(response ?? []);
        } catch (error) {
          console.log('Error fetching books:', error);
        }
      };
      fetchBooks();
    }, [])
  );

  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity onPress={() => router.push(`/book-detail?id=${item.id}`)}>
      <View className="mr-4 mb-2">
        {item.volumeInfo?.imageLinks?.thumbnail ? (
          <>
            <Image
              source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
              className="h-[150px] w-[100px] rounded-lg"
            />
            <Text className="text-sm font-bold text-white mt-1 w-[100px]" numberOfLines={2}>
              {item.volumeInfo.title}
            </Text>
          </>
        ) : (
          <View className="h-[150px] w-[100px] bg-gray-800 rounded-lg justify-center items-center">
            <Text className="text-white text-center">No image</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={books}
      keyExtractor={({ id }) => id}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      ListEmptyComponent={
        <Text className="text-gray-500 text-sm px-4">Nothing saved yet</Text>
      }
    />
  );
};

export default MyBooksList;
