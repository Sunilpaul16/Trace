import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {
  bellIcon,
  watchedIcon,
  bookmarkIcon,
  listIcon,
  noteIcon
} from '../../assets/icons';

export const GameNav = ({
  isSaved,
  handleSaveGame
}: {
  isSaved: boolean;
  handleSaveGame: () => void;
}) => (
  <View className="flex-row justify-around mb-4">
    <TouchableOpacity className="items-center">
      {bellIcon}
      <Text className="text-xs text-white mt-1">Reminder</Text>
    </TouchableOpacity>
    <TouchableOpacity className="items-center" onPress={handleSaveGame}>
      {isSaved ? watchedIcon : bookmarkIcon}
      <Text className="text-xs text-white mt-1">
        {isSaved ? 'Played' : 'Wishlist'}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity className="items-center">
      {listIcon}
      <Text className="text-xs text-white mt-1">Add to list</Text>
    </TouchableOpacity>
    <TouchableOpacity className="items-center">
      {watchedIcon}
      <Text className="text-xs text-white mt-1">Played</Text>
    </TouchableOpacity>
    <TouchableOpacity className="items-center">
      {noteIcon}
      <Text className="text-xs text-white mt-1">Note</Text>
    </TouchableOpacity>
  </View>
);

{
  /* <View className="flex-row justify-between mb-4">
            <View className="bg-yellow-500 rounded-full px-3 py-1 flex-row items-center">
              {starIcon}
              <Text className="text-white ml-1 font-bold">
                {data?.aggregated_rating?.toFixed(1)}
              </Text>
              <Text className="text-white ml-1">• {data?.rating_count}</Text>
            </View>
            <View className="flex-row items-center">
              {calendarIcon}
              <Text className="text-white ml-1">
                Release: {formatDate(data?.first_release_date)}
              </Text>
            </View>
          </View> */
}
