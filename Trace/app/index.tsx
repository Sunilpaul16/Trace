import { Text, View, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/ui/buttonComponent';
import { StatusBar } from 'expo-status-bar';

export default function Trace() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full flex justify-center items-center px-4 py-8">
          <Image
            source={require('../assets/logo.png')}
            resizeMode="contain"
            className="w-[130px] h-[84px] mt-8"
          />
          <Image
            source={require('../assets/onboarding.png')}
            className="max-w-[360px] w-full h-[280px] mt-8 rounded-2xl"
            resizeMode="contain"
          />
          <View className="mt-8">
            <Text className="text-3xl text-white font-bold text-center">
              Everything you've watched, read, and{' '}
              <Text className="text-orange-400">played.</Text>
            </Text>
          </View>
          <Text className="text-sm text-gray-400 mt-4 text-center">
            Keep track of it all in one place.
          </Text>
          <View className="mt-8 w-full">
            <CustomButton
              title="Get Started"
              handlePress={() => router.push('/signin')}
              textStyles="text-white outline-gray-600 font-semibold"
              containerStyles="w-full"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" />
    </SafeAreaView>
  );
}
