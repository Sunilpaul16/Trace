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
import { Image } from 'react-native';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className=" bg-gray-900 h-full">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 ">
          <Image
            source={require('../../assets/logo.png')}
            resizeMode="contain"
            className="w-[115px] h-[85px]"
          />

          <View className="pb-4 justify-start w-full">
            <Text className="text-2xl text-white font-semibold mt-10 ">
              Sign in to Trace
            </Text>
          </View>
          <View className="w-full">
            <Text className="text-2xl text-white">Email</Text>
            <TextInput
              className="border-2 h-[45px] border-gray-400 rounded-lg p-3 my-3   text-white"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text className="text-2xl text-white">Password</Text>
          </View>

          <View className="flex-row items-center border-2 border-gray-400 rounded-lg px-3 my-3 ">
            <TextInput
              className="flex-1 p-3 h-[45px] text-white"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? eyeHideIcon : eyeShowIcon}
            </TouchableOpacity>
          </View>
          <View className="w-full">
            <CustomButton
              title="Sign-In"
              handlePress={() => router.push('/home')}
              containerStyles="bg-orange-400 w-full h-[45px] rounded-lg mt-4  flex items-center justify-center"
              textStyles={undefined}
            />
            <Text className="my-3 text-white">Forgot Password?</Text>
            <Text className="my-3 text-white">
              Don't have an account?
              <Link href="/signup" className="text-orange-400">
                Sign-Up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
