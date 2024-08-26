import React from 'react';
import { Stack } from 'expo-router';

const ScreenLayout = () => {
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
          contentStyle: {
            backgroundColor: '#94a3b8'
          },
          headerShown: false,
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

export default ScreenLayout;
