import React from 'react';
import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="movie-detail" options={{ headerShown: false }} />
      <Stack.Screen name="game-detail" options={{ headerShown: false }} />
      <Stack.Screen name="book-detail" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
