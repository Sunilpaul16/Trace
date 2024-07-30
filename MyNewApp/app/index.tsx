import { Text, View, ScrollView, Image, StatusBar } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/ui/ButtonComponent';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView>
        <View className="flex-1">
          <View className="w-full justify-center items-center px-4 py-8">
            <Image
              source={require('../assets/t2.png')}
              resizeMode="contain"
              className="w-[115px] h-[85px] mt-8 "
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
              <Text className="text-sm font-regular text-gray-100 text-center mt-4">
                Discover insights, patterns, and hidden gems in your digital
                adventures
              </Text>
            </View>
            <View className="mt-8 w-full">
              <CustomButton
                title="Continue with Email"
                handlePress={() => router.push('/signup')}
                containerStyles="bg-orange-400 w-full h-[40px] rounded-lg mt-4  flex items-center justify-center"
                textStyles="text-white font-semibold"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
