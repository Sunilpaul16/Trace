import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import GetBooks from '../../components/books/bookList';
import { View } from 'react-native';
import HorizontalList from '../../components/books/myBookList';

const App = () => {
  return (
    <SafeAreaView className="bg-slate-400 h-full">
      <View className="bg-slate-400 h-40 border-2 border-red-600">
        <HorizontalList />
      </View>
      <GetBooks />
    </SafeAreaView>
  );
};

export default App;
