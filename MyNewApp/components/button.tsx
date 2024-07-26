import { Text, TouchableOpacity, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import React from 'react';

const CustomButton = ({
  title,
  handlePress
}: {
  title: string;
  handlePress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className=" bg-blue-500 rounded-xl justify-center items-center h-12 my-3 "
    >
      <View className="flex justify-center items-center">
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
