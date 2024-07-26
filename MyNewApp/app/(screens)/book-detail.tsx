import { View, Text } from 'react-native';
import React from 'react';

type Book = {
  id: number;
  title: string;
  vote_average: number;
  description: string;
  thumbnail: string;
  author: string;
  publishedDate: string;
  pageCount: number;
  printedPageCount: number;
};

const BookDetail = () => {
  return (
    <View>
      <Text>BookDetail</Text>
    </View>
  );
};

export default BookDetail;
