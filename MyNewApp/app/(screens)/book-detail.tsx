import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import CustomButton from '../../components/button';
import { fetchBookDetail, postMyBook } from '../../API/bookAPI';

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
  const [data, setData] = useState<Book | null>(null);
  const { id } = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      fetchBookDetail(id)
        .then(json => setData(json))
        .catch(error => console.error('Failed to fetch book details:', error));
    }
  }, []);

  // const handleSaveBook = async () => {
  //   if (data) {
  //     try {
  //       await postMyBook(data);
  //       console.log('Book saved successfully');
  //     } catch (error) {
  //       console.error('Failed to save book:', error);
  //     }
  //   }
  // };

  return (
    <SafeAreaView className="bg-slate-700 h-full">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View className="bg-slate-700">
          <Text className="text-3xl font-bold text-white mb-4">
            {data?.volumeInfo.title}
          </Text>
          {data?.volumeInfo.imageLinks?.thumbnail ? (
            <Image
              source={{ uri: data.volumeInfo.imageLinks.thumbnail }}
              className="h-[300px] w-[200px] rounded-xl mb-4"
              resizeMode="cover"
            />
          ) : (
            <Text className="text-white mb-4">No image available</Text>
          )}
          <Text className="text-white mb-4">
            {data?.volumeInfo.publishedDate}
          </Text>
          <Text className="text-white mb-4">
            {data?.volumeInfo.description}
          </Text>
          {/* <CustomButton title="Save Book" handlePress={handleSaveBook} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default GetBooks;
