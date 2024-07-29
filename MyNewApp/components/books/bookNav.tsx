import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {
  bellIcon,
  watchedIcon,
  bookmarkIcon,
  listIcon,
  noteIcon
} from '../../assets/icons';

export const BookNav = ({
  isSaved,
  handleSaveBook
}: {
  isSaved: boolean;
  handleSaveBook: () => void;
}) => (
  <View className="flex-row justify-around mb-4">
    <TouchableOpacity className="items-center">
      {bellIcon}
      <Text className="text-xs text-white mt-1">Reminder</Text>
    </TouchableOpacity>
    <TouchableOpacity className="items-center" onPress={handleSaveBook}>
      {isSaved ? watchedIcon : bookmarkIcon}
      <Text className="text-xs text-white mt-1">
        {isSaved ? 'Saved' : 'Save'}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity className="items-center">
      {listIcon}
      <Text className="text-xs text-white mt-1">Add to list</Text>
    </TouchableOpacity>
    <TouchableOpacity className="items-center">
      {watchedIcon}
      <Text className="text-xs text-white mt-1">Read</Text>
    </TouchableOpacity>
    <TouchableOpacity className="items-center">
      {noteIcon}
      <Text className="text-xs text-white mt-1">Note</Text>
    </TouchableOpacity>
  </View>
);
