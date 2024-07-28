import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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

const GetBooks = () => {
  const [data, setData] = useState<Book[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetchBooks();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };
    getBooks();
  }, []);

  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity onPress={() => router.push(`/book-detail?id=${item.id}`)}>
      <View className="bg-gray-900 border-2 border-red-700 p-4 mb-4 rounded-lg">
        <Text className="text-2xl font-bold text-white">
          {item.volumeInfo.title}
        </Text>
        <View className="mt-2">
          {item.volumeInfo.imageLinks?.thumbnail ? (
            <Image
              source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
              className="h-[200px] w-[150px] rounded-xl"
            />
          ) : (
            <Text className="text-white">No image available</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
};

export default GetBooks;
