import { Text, View, ScrollView, Image, StatusBar } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/ui/ButtonComponent';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 ">
          <Image
            source={require('../assets/t2.png')}
            resizeMode="contain"
            className="w-[130px] h-[85px] mt-8 "
          />
          {/* <Image
              source={require('../assets/placeholder.png')}
              className="max-w-[380px] w-full h-[300px] mt-8 rounded-2xl"
              resizeMode="cover"
            /> */}
          <View className="mt-8">
            <Text className="text-3xl text-white font-bold text-center mt-9">
              Unlock the story of your virtual life with{' '}
              <Text className="text-orange-400">Trace</Text>
            </Text>
          </View>
          <View className="mt-4">
            <Text className="font-semibold font-regular text-gray-100 text-center mt-4">
              Discover insights, patterns, and hidden gems in your digital
              adventures
            </Text>
          </View>
          <View className="mt-8">
            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push('/signin')}
              textStyles="text-white outline-gray-600 font-semibold"
              containerStyles={undefined}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
