import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="h-full bg-slate-400">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full px-4 justify-center items-center min-h-[85vh]">
          <Text className="text-4xl">My-App!!</Text>
          <StatusBar style="auto" />
          <Link href="/home" className="text-2xl">
            Home
          </Link>
          <Link href="/signin" className="text-2xl">
            signin
          </Link>
          <Link href="/signup" className="text-2xl">
            signup
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
