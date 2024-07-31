import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { fetchBooks } from '../../API/bookAPI';

import { Book } from '../../API/typesFile';
import BookSearch from './BookSearch';

const GetBooks = () => {
  const [data, setData] = useState<Book[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetchBooks();
        setData(response);
      } catch (error) {
        console.log('Error fetching books:', error);
      }
    };
    getBooks();
  }, []);
  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity onPress={() => router.push(`/book-detail?id=${item.id}`)}>
      <View className="bg-gray-900 p-4 mb-4 rounded-lg flex-row">
        <View className="mr-4">
          {item.volumeInfo.imageLinks?.thumbnail ? (
            <Image
              source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
              className="h-[200px] w-[150px] rounded-xl"
            />
          ) : (
            <View className="h-[200px] w-[150px] bg-gray-700 rounded-xl flex items-center justify-center">
              <Text className="text-white text-center">No image available</Text>
            </View>
          )}
        </View>
        <View className="flex-1 justify-between">
          <View className=" p-2 rounded mb-2">
            <Text className="text-2xl font-bold text-white" numberOfLines={2}>
              {item.volumeInfo.title}
            </Text>
          </View>
          <View className="p-2 rounded">
            <Text className="text-white text-lg">
              Ratings: {item.volumeInfo.averageRating}
            </Text>
          </View>
          <View className="p-2 rounded">
            <Text className="text-lg text-white">Details</Text>
          </View>
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
        contentContainerStyle={{ padding: 7 }}
        ListHeaderComponent={
          <>
            <View>
              <Text className="text-4xl text-orange-400 justify-center text-center font-bold -mt-2 ">
                Books
              </Text>
            </View>
            <View className=" p-2 rounded-lg ">
              <BookSearch />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default GetBooks;
