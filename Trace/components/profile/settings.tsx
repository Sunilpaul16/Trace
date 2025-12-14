import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <View className="px-4 pt-6">
        <Text className="text-white text-3xl font-bold mb-8">Settings</Text>

        <View className="bg-gray-800 rounded-xl overflow-hidden mb-4">
          <View className="px-4 py-4 border-b border-gray-700">
            <Text className="text-white text-base">About Trace</Text>
          </View>
          <View className="px-4 py-4">
            <Text className="text-white text-base">Version 1.0.0</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
