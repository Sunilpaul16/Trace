import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { getMyBooks } from '../../API/bookAPI';
import { Book } from '../../API/typesFile';

const MyBooksList = () => {
  const [books, setBooks] = useState<Book[] | undefined>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getMyBooks();
        console.log('fetchBooks books in component: success');
        setBooks(response);
      } catch (error) {
        console.log('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity onPress={() => router.push(`/book-detail?id=${item.id}`)}>
      <View className="bg-gray-900 mb-4 rounded-lg">
        <View className="mr-4 mb-2">
          {item.volumeInfo?.imageLinks?.thumbnail ? (
            <>
              <Image
                source={{ uri: item.volumeInfo?.imageLinks.thumbnail }}
                className="h-[150px] w-[100px] rounded-lg"
              />
              <Text
                className="text-sm font-bold text-white mt-1 w-[100px]"
                numberOfLines={2}
              >
                {item.volumeInfo.title}
              </Text>
            </>
          ) : (
            <View className="h-[150px] w-[100px] bg-gray-800 rounded-lg justify-center items-center">
              <Text className="text-white text-center">No image</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={books}
      keyExtractor={({ id }) => id.toString()}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default MyBooksList;
