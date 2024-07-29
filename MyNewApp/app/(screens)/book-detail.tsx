import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import {
  deleteBookFromMyBooks,
  fetchBookDetail,
  Book,
  postMyBook,
  getMyBooks
} from '../../API/bookAPI';
import { BookNav } from '../../components/books/bookNav';

const BookDetail = () => {
  const [data, setData] = useState<Book | null>(null);
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isSaved, setIsSaved] = useState(false);

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
            imageLinks: json.volumeInfo.imageLinks || { thumbnail: '' },
            averageRating: json.volumeInfo.averageRating || 0,
            categories: json.volumeInfo.categories || []
          };
          setData(bookData);
        })
        .catch(error => console.log('Failed to fetch book details:', error));
      getMyBooks()
        .then(savedBooks => {
          const isBookSaved = savedBooks.some(
            (book: { id: string }) => book.id === id
          );
          setIsSaved(isBookSaved);
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

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative">
          <Image
            source={{ uri: data?.imageLinks?.thumbnail }}
            className="w-full h-64"
            resizeMode="cover"
          />
          <View className="absolute bottom-0 left-4 right-4 flex-row items-end">
            <Image
              source={{ uri: data?.imageLinks?.thumbnail }}
              className="w-24 h-36 rounded-lg"
            />
            <View className="ml-4 mb-2">
              <Text className="text-white text-2xl font-bold">
                {data?.title}
              </Text>
              <Text className="text-white">{data?.authors.join(', ')}</Text>
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
              {data?.categories?.map(category => (
                <Text
                  key={category}
                  className="text-white mr-2 mb-2 px-2 py-1 bg-gray-800 rounded"
                >
                  {category}
                </Text>
              ))}
            </View>
          </View>
          <View className="flex-row justify-between mb-4">
            <View className="rounded-full px-3 py-1 flex-row items-center">
              {[1, 2, 3, 4, 5].map(star => (
                <Text className="text-yellow-400" key={star}>
                  {star <= Math.round(data?.averageRating ?? 0) ? '★' : '☆'}
                </Text>
              ))}
              <Text className="text-white ml-1 font-bold">
                {data?.averageRating ? data.averageRating.toFixed(1) : 'N/A'}
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-white ml-1">
                Published: {formatDate(data?.publishedDate)}
              </Text>
            </View>
          </View>
          <View className="flex-row items-center">
            <Text className="text-white ml-1">Page: {data?.pageCount}</Text>
          </View>
          <View className="mb-4">
            <Text className="text-xl font-bold text-white mb-2">
              Description
            </Text>
            <Text className="text-white">{data?.description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetail;
