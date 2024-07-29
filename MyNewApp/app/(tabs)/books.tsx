import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import GetBooks from '../../components/books/bookList';
import { View } from 'react-native';
import SearchComponent from '../../components/ui/SearchComponent';

const App = () => {
  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <View className="bg-gray-900 p-2 -mt-3 h-20 ">
        <SearchComponent data={[]} />
      </View>
      <GetBooks />
    </SafeAreaView>
  );
};

export default App;
