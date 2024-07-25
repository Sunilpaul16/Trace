import { Text, TouchableOpacity } from 'react-native';
import { Redirect, router } from 'expo-router';
import React from 'react';

const CustomButton = () => {
  return (
    <TouchableOpacity
      onPress={() => router.push('/home')}
      className=" bg-blue-500 rounded-xl justify-center items-center h-12 my-3 "
    >
      <Text>CustomButton</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
