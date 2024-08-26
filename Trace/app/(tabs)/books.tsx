import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import GetBooks from '../../components/books/bookList';
import { View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <View>
        <GetBooks />
      </View>
    </SafeAreaView>
  );
};

export default App;
