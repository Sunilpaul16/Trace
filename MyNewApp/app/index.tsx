import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-400">
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
  );
}
