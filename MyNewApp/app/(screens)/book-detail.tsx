import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import CustomButton from '../../components/ui/button';
import {
  fetchBookDetail,
  postMyBook,
  Book,
  deleteBookFromMyBooks
} from '../../API/bookAPI';

const GetBooks = () => {
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
            imageLinks: json.volumeInfo.imageLinks || { thumbnail: '' }
          };
          setData(bookData);
        })
        .catch(error => console.error('Failed to fetch book details:', error));
    }
  }, [id]);

  const handleSaveBook = async () => {
    if (data) {
      try {
        if (isSaved) {
          await deleteBookFromMyBooks(data.id);
          console.log('Book removed successfully:', data.id);
          setIsSaved(false);
        } else {
          console.log('Attempting to save book:');
          await postMyBook(data);
          console.log('Book saved successfully');
          setIsSaved(true);
        }
      } catch (error) {
        console.error('Failed to save/remove book:');
      }
    }
  };

  if (!data) {
    return (
      <SafeAreaView className="flex-1 bg-gray-900 justify-center items-center">
        <Text className="text-white text-xl">Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-900 p-4">
      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        <View className="bg-gray-900">
          <Text className="text-4xl font-bold text-white mb-4">
            {data.title}
          </Text>
          {data.imageLinks?.thumbnail ? (
            <View className="flex justify-center items-center mb-4">
              <Image
                source={{ uri: data.imageLinks.thumbnail }}
                className="h-[300px] w-[200px] rounded-xl"
                resizeMode="cover"
              />
            </View>
          ) : (
            <Text className="text-white mb-4">No image available</Text>
          )}
          <Text className="text-xl text-white mb-4">
            Authors: {data.authors.join(', ')}
          </Text>
          <Text className="text-xl text-white mb-4">
            Published: {data.publishedDate}
          </Text>
          <Text className="text-lg text-white mb-4">
            Description: {data.description}
          </Text>
          <CustomButton
            title={isSaved ? 'Remove Book' : 'Save Book'}
            handlePress={handleSaveBook}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GetBooks;
