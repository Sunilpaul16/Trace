import { Text, TouchableOpacity } from 'react-native';
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
      // onPress={() => router.push('/home')}
      onPress={handlePress}
      className=" bg-blue-500 rounded-xl justify-center items-center h-12 my-3 "
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
