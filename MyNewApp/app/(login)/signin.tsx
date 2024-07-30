import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../../components/ui/ButtonComponent';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { eyeHideIcon, eyeShowIcon } from '../../assets/icons';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="h-full bg-gray-900">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full justify-center px-6 bg-slategray bg-gray-900">
          <Text className="text-2xl text-white">Email</Text>
          <TextInput
            className="border-2 border-gray-400 rounded-2xl p-3 my-3   text-white"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text className="text-2xl text-white">Password</Text>
          <View className="flex-row items-center border-2 border-gray-400 rounded-2xl px-3 my-3 ">
            <TextInput
              className="flex-1 p-3 text-white"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? eyeHideIcon : eyeShowIcon}
            </TouchableOpacity>
          </View>
          <CustomButton
            title="Sign-In"
            handlePress={() => router.push('/home')}
          />
          <Text className="my-3 text-white">Forgot Password?</Text>
          <Text className="my-3 text-white">
            Don't have an account?
            <Link href="/signup" className="text-red-500">
              Sign-Up
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
