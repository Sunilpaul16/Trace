import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import {
  deleteBookFromMyBooks,
  fetchBookDetail,
  postMyBook,
  getMyBooks
} from '../../API/bookAPI';
import { BookNav } from '../../components/books/bookNav';
import { Book } from '../../API/typesFile';
import { arrowLeftIconLight } from '../../assets/icons';

const BookDetail = () => {
  const [data, setData] = useState<Book | null>(null);
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      fetchBookDetail(id)
        .then(bookData => {
          setData(bookData);
        })
        .catch(error => console.log('Failed to fetch book details:', error));
      getMyBooks()
        .then(savedBooks => {
          const isBookSaved = savedBooks?.some(book => book.id === id);
          setIsSaved(isBookSaved || false);
        })
        .catch(error =>
          console.log('Failed to check if book is saved:', error)
        );
    }
  }, [id]);

  const handleSaveBook = async () => {
    if (data) {
      try {
        if (isSaved) {
          await deleteBookFromMyBooks(data.id);
        } else {
          await postMyBook(data);
        }
        setIsSaved(!isSaved);
      } catch (error) {
        console.log('Error saving book:', error);
      }
    }
  };

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString();
  };

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative">
          <TouchableOpacity className="" onPress={() => router.back()}>
            {arrowLeftIconLight}
          </TouchableOpacity>
          <Image
            source={{ uri: data.volumeInfo.imageLinks?.thumbnail }}
            className="w-full h-64  opacity-25"
            resizeMode="cover"
          />
          <View className="absolute bottom-0 left-4 right-4 flex-row items-end">
            <Image
              source={{ uri: data.volumeInfo.imageLinks?.thumbnail }}
              className="w-24 h-36 rounded-lg"
            />
            <View className="ml-4 mb-2">
              <Text
                className="text-white text-2xl font-bold w-[300px]"
                numberOfLines={2}
              >
                {data.volumeInfo.title}
              </Text>
              <Text className="text-white">
                {data.volumeInfo.authors?.join(', ')}
              </Text>
            </View>
          </View>
        </View>

        <View className="p-4">
          <BookNav isSaved={isSaved} handleSaveBook={handleSaveBook} />
          <View className="mb-4">
            <Text className="text-xl font-bold text-white mb-2">
              Categories
            </Text>
            <View className="flex-row flex-wrap">
              {data.volumeInfo.categories?.slice(0, 2).map(category => (
                <View
                  className="rounded-full bg-gray-700 px-3 py-1 mr-2 mb-2"
                  key={category}
                >
                  <Text className="text-white">{category}</Text>
                </View>
              ))}
            </View>
          </View>
          <View className="flex-row justify-between mb-4">
            <View className="rounded-full py-1 flex-row items-center">
              {[1, 2, 3, 4, 5].map(star => (
                <Text className="text-yellow-400" key={star}>
                  {star <= Math.round(data.volumeInfo.averageRating ?? 0)
                    ? '★'
                    : '☆'}
                </Text>
              ))}
              <Text className="text-white ml-1 font-bold">
                {data.volumeInfo.averageRating
                  ? data.volumeInfo.averageRating.toFixed(1)
                  : 'N/A'}
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-white ml-1">
                Published: {formatDate(data.volumeInfo.publishedDate)}
              </Text>
            </View>
          </View>
          {data.volumeInfo.pageCount && (
            <View className="mb-4">
              <Text className="text-xl font-bold text-white mb-2">
                Reading Progress
              </Text>
            </View>
          )}
          <View className="mb-4">
            <Text className="text-xl font-bold text-white mb-2">
              Description
            </Text>
            <Text className="text-white">{data.volumeInfo.description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetail;
