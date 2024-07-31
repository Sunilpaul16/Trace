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

export const BookNav = ({
  isSaved,
  handleSaveBook
}: {
  isSaved: boolean;
  handleSaveBook: () => void;
}) => {
  const [isReminder, setIsReminder] = useState(false);
  const [isAddedToList, setIsAddedToList] = useState(false);
  const [isRead, setIsRead] = useState(false);
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
      <TouchableOpacity className="items-center" onPress={handleSaveBook}>
        {isSaved ? bookmarkIconOrange : bookmarkIcon}
        <Text className="text-xs text-white mt-1">
          {isSaved ? 'Saved' : 'Watchlist'}
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
        onPress={() => setIsRead(!isRead)}
      >
        {isRead ? watchedIconOrange : watchedIcon}
        <Text className="text-xs text-white mt-1">Read</Text>
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
