import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import React from 'react';
import CustomButton from '../../components/ui/ButtonComponent';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 ">
          <Image
            source={require('../../assets/t2.png')}
            resizeMode="contain"
            className="w-[115px] h-[85px]"
          />
          <View className="pb-4 w-full">
            <Text className="text-2xl text-white justify-center font-semibold mt-10 ">
              Sign up to Trace
            </Text>
          </View>
          <View className="w-full">
            <Text className="text-lg text-white">Email</Text>
            <TextInput
              className="border-2 border-gray-400 h-[45px] rounded-lg p-3 my-3  text-white"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text className="text-lg text-white">Password</Text>
          </View>

          <View className="flex-row items-center border-2 h-[45px] border-gray-400 rounded-lg px-3 my-3 ">
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
          <View className="w-full">
            <Text className="text-lg text-white">Confirm Password</Text>
          </View>
          <View className="flex-row items-center border-2 h-[45px] border-gray-400 rounded-lg px-3 my-3 ">
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
          <View className="w-full">
            <CustomButton
              title="Sign-up"
              handlePress={() => router.push('/home')}
              containerStyles="bg-orange-400 w-full h-[40px] rounded-lg mt-4  flex items-center justify-center"
              textStyles={undefined}
            />
            <Text className="my-3 mt-3 text-white">Forgot Password?</Text>
            <Text className="my-3 text-white">
              Already have an account?{' '}
              <Link href="/signin" className="text-orange-400">
                Sign-Up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
