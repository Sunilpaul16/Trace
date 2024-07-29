import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { userIcon } from '../../assets/icons';

const profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>User Name</Text>
          <Text>User Id</Text>
          <TouchableOpacity>{userIcon}</TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
