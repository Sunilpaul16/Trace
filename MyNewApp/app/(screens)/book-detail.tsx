import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  fetchBookDetail,
  postMyBook,
  deleteBookFromMyBooks,
  Book
} from '../../API/bookAPI';
import { arrowLeftIcon, closeIcon, calendarIcon } from '../../assets/icons';

const BookDetail = () => {
  const [data, setData] = useState<Book | null>(null);
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isSaved, setIsSaved] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      fetchBookDetail(id)
        .then(json => {
          const bookData: Book = {
            id: json.id,
            title: json.volumeInfo.title,
            authors: json.volumeInfo.authors || [],
            publishedDate: json.volumeInfo.publishedDate || '',
            description: json.volumeInfo.description || '',
            imageLinks: json.volumeInfo.imageLinks || { thumbnail: '' }
          };
          setData(bookData);
        })
        .catch(error => console.log('Failed to fetch book details:', error));
    }
  }, [id]);

  const handleSaveBook = async () => {
    if (data) {
      try {
        if (isSaved) {
          await deleteBookFromMyBooks(data.id);
          setIsSaved(false);
        } else {
          await postMyBook(data);
          setIsSaved(true);
        }
      } catch (error) {
        console.log('Failed to save/remove book:', error);
      }
    }
  };

  if (!data) {
    return (
      <SafeAreaView className="flex-1 bg-white justify-center items-center">
        <Text className="text-xl">Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative">
          <Image
            source={{ uri: data.imageLinks?.thumbnail }}
            className="w-full h-64"
            resizeMode="cover"
          />
          <View className="absolute top-4 left-4 right-4 flex-row justify-between">
            <TouchableOpacity onPress={() => router.back()}>
              {arrowLeftIcon}
            </TouchableOpacity>
            <TouchableOpacity>{closeIcon}</TouchableOpacity>
          </View>
          <View className="absolute bottom-0 left-4 right-4 flex-row items-end">
            <Image
              source={{ uri: data.imageLinks?.thumbnail }}
              className="w-24 h-36 rounded-lg"
            />
            <View className="ml-4 mb-2">
              <Text className="text-white text-2xl font-bold">
                {data.title}
              </Text>
              <Text className="text-white">{data.authors.join(', ')}</Text>
            </View>
          </View>
        </View>

        <View className="p-4">
          <View className="flex-row justify-between mb-4">
            <View className="flex-row items-center">
              {calendarIcon}
              <Text className="text-white ml-1">
                Published: {data.publishedDate}
              </Text>
            </View>
          </View>

          <View className="mb-4">
            <Text className="text-xl font-bold text-white mb-2">
              Description
            </Text>
            <Text className="text-white ">{data.description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetail;
