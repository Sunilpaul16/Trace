import { Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="(login)"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#94a3b8'
          }
        }}
      />
      <Stack.Screen
        name="(screens)"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
};

export default _layout;
