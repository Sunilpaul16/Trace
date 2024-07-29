import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import CustomButton from '../../components/ui/buttonComponent';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <SafeAreaView className="bg-gray-900">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full justify-center px-6 bg-slategray bg-gray-900">
          <Text className="text-2xl text-white">Email</Text>
          <TextInput
            className="border-2 border-gray-400 rounded-2xl p-3 my-3  text-white"
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
              {showPassword ? (
                <Entypo name="eye" size={24} color="gray" />
              ) : (
                <Entypo name="eye-with-line" size={24} color="gray" />
              )}
            </TouchableOpacity>
          </View>
          <Text className="text-2xl text-white">Confirm Password</Text>
          <View className="flex-row items-center border-2 border-gray-400 rounded-lg px-3 my-3 ">
            <TextInput
              className="flex-1 p-3 text-white"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Entypo name="eye" size={24} color="gray" />
              ) : (
                <Entypo name="eye-with-line" size={24} color="gray" />
              )}
            </TouchableOpacity>
          </View>
          <CustomButton
            title="Sign-up"
            handlePress={() => router.push('/home')}
          />
          <Text className="my-3 text-white">Forgot Password?</Text>
          <Text className="my-3 text-white">
            Already have an account?
            <Link href="/signin" className="text-red-500">
              Sign-Up
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
