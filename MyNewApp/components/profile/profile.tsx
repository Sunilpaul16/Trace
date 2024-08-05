import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { userIcon } from '../../assets/icons';
import MyBooksList from '../books/myBookList';
import MyGamesList from '../games/myGameList';

const profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>User Name</Text>
          <Text>User Id</Text>
          <TouchableOpacity>{userIcon}</TouchableOpacity>
          <MyBooksList />
          <MyGamesList />
          <MyGamesList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
