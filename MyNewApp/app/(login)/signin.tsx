import { Text, TextInput, View } from 'react-native';
import React from 'react';
import CustomButton from '../../components/ui/button';
import { Link, router } from 'expo-router';

const SignIn = () => {
  return (
    <View className="w-full justify-center h-full px-6 bg-slate-400 ">
      <Text className="text-4xl">Email</Text>
      <TextInput className="border-2 border-gray-300 rounded-lg p-2 my-2" />
      <Text className="text-4xl">Password</Text>
      <TextInput className="border-2 border-gray-300 rounded-lg p-2 my-2" />
      <CustomButton title="Sign-In" handlePress={() => router.push('/home')} />
      <Text className="my-3">Forgot Password?</Text>
      <Text className="my-3">
        {' '}
        Don't have account?
        <Link href="/signup" className="text-red-800">
          {' '}
          Sign-Up
        </Link>{' '}
      </Text>
    </View>
  );
};

export default SignIn;
