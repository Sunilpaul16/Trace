import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const SignIn = () => {
  return (
    <View className="w-full justify-center h-full px-6">
      <Text className="text-4xl">Email</Text>
      <TextInput className="border-2 border-gray-300 rounded-lg p-2" />
      <Text className="text-4xl">Password</Text>
      <TextInput className="border-2 border-gray-300 rounded-lg p-2" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
