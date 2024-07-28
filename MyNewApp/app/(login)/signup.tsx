import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import CustomButton from '../../components/ui/button';
import { Link, router } from 'expo-router';

const SignUp = () => {
  return (
    <View className="w-full justify-center h-full px-6 bg-slate-400">
      <Text className="text-4xl">Email</Text>
      <TextInput className="border-2 border-gray-300 rounded-lg p-2 my-3" />
      <Text className="text-4xl">Password</Text>
      <TextInput className="border-2 border-gray-300 rounded-lg p-2 my-3" />
      <Text className="text-4xl">Confirm Password</Text>
      <TextInput className="border-2 border-gray-300 rounded-lg p-2 my-3" />
      <CustomButton title="Sign-In" handlePress={() => router.push('/home')} />
      <Text className="my-3">
        Already have an account?
        <Link className="text-red-800 " href="/signin">
          {' '}
          Sign-In
        </Link>
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
