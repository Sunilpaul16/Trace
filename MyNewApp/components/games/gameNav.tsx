import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {
  bellIcon,
  bellIconOrange,
  watchedIcon,
  watchedIconOrange,
  bookmarkIcon,
  bookmarkIconOrange,
  listIcon,
  listIconOrange,
  noteIcon,
  noteIconOrange
} from '../../assets/icons';

export const GameNav = ({
  isSaved,
  handleSaveGame
}: {
  isSaved: boolean;
  handleSaveGame: () => void;
}) => {
  const [isReminder, setIsReminder] = useState(false);
  const [isAddedToList, setIsAddedToList] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);
  const [isNoted, setIsNoted] = useState(false);

  return (
    <View className="flex-row justify-around mb-4">
      <TouchableOpacity
        className="items-center"
        onPress={() => setIsReminder(!isReminder)}
      >
        {isReminder ? bellIconOrange : bellIcon}
        <Text className="text-xs text-white mt-1">Reminder</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center" onPress={handleSaveGame}>
        {isSaved ? bookmarkIconOrange : bookmarkIcon}
        <Text className="text-xs text-white mt-1">
          {isSaved ? 'Saved' : 'Wishlist'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center"
        onPress={() => setIsAddedToList(!isAddedToList)}
      >
        {isAddedToList ? listIconOrange : listIcon}
        <Text className="text-xs text-white mt-1">Add to list</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center"
        onPress={() => setIsPlayed(!isPlayed)}
      >
        {isPlayed ? watchedIconOrange : watchedIcon}
        <Text className="text-xs text-white mt-1">Played</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center"
        onPress={() => setIsNoted(!isNoted)}
      >
        {isNoted ? noteIconOrange : noteIcon}
        <Text className="text-xs text-white mt-1">Note</Text>
      </TouchableOpacity>
    </View>
  );
};
