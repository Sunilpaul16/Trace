import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { useRouter } from 'expo-router';
import { fetchBooks, Book } from '../../API/bookAPI';

const MyBooksList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        setLoading(true);
        const fetchedBooks = await fetchBooks();
        console.log('Fetched books in component:');
        if (Array.isArray(fetchedBooks)) {
          setBooks(fetchedBooks);
        } else {
          setError('Invalid data format received');
        }
      } catch (error) {
        console.error('Error fetching books:', error);
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooksData();
  }, []);

  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity onPress={() => router.push(`/book-detail?id=${item.id}`)}>
      <View className="mr-4 mb-2">
        {item.volumeInfo?.imageLinks?.thumbnail ? (
          <>
            <Image
              source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
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
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#ffffff" />;
  }

  if (error) {
    return <Text className="text-white">{error}</Text>;
  }

  if (books.length === 0) {
    return <Text className="text-white">No books found</Text>;
  }

  return (
    <FlatList
      data={books}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default MyBooksList;
