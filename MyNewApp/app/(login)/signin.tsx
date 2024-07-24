import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import CustomButton from '../../components/button';

const SignIn = () => {
  return (
    <View className="w-full justify-center h-full px-6 bg-slate-400">
      <Text className="text-4xl">Email</Text>
      <TextInput className="border-2 border-gray-300 rounded-lg p-2" />
      <Text className="text-4xl">Password</Text>
      <TextInput className="border-2 border-gray-300 rounded-lg p-2" />
      <CustomButton />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
