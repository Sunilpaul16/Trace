import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { searchIcon } from '../../assets/icons';

const SearchComponent = ({
  data
}: {
  data: Array<{ id: number; title: string }>;
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const newData = data.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredData(data);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900 ">
      <View className="flex-row items-center bg-gray-800 -mt-2 p-2 h-12 rounded-xl mb-4">
        <TextInput
          value={searchQuery}
          onChangeText={handleSearch}
          placeholder="Search..."
          placeholderTextColor="#999"
          className="text-white flex-1"
        />
        <TouchableOpacity onPress={clearSearch} className="ml-2">
          {searchIcon}
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View className="bg-gray-800 p-4 mb-4 rounded-xl">
            <Text className="text-white text-lg">{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default SearchComponent;
