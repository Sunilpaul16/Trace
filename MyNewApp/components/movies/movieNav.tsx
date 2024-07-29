import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {
  bellIcon,
  watchedIcon,
  bookmarkIcon,
  listIcon,
  noteIcon
} from '../../assets/icons';

export const MovieNav = ({
  isSaved,
  handleSaveMovie
}: {
  isSaved: boolean;
  handleSaveMovie: () => void;
}) => (
  <View className="flex-row justify-around mb-4">
    <TouchableOpacity className="items-center">
      {bellIcon}
      <Text className="text-xs text-white mt-1">Reminder</Text>
    </TouchableOpacity>
    <TouchableOpacity className="items-center" onPress={handleSaveMovie}>
      {isSaved ? watchedIcon : bookmarkIcon}
      <Text className="text-xs text-white mt-1">
        {isSaved ? 'Watched' : 'Waychlist'}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity className="items-center">
      {listIcon}
      <Text className="text-xs text-white mt-1">Add to list</Text>
    </TouchableOpacity>
    <TouchableOpacity className="items-center">
      {watchedIcon}
      <Text className="text-xs text-white mt-1">Watched</Text>
    </TouchableOpacity>
    <TouchableOpacity className="items-center">
      {noteIcon}
      <Text className="text-xs text-white mt-1">Note</Text>
    </TouchableOpacity>
  </View>
);
