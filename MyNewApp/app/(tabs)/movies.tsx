import { Text, View } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';

type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};

const Movies = () => {
  return (
    <View className="flex-1 items-center justify-center bg-slate-400">
      <Text className="text-3xl">Movies</Text>
    </View>
  );
};

export default Movies;
