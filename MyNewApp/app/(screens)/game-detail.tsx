import { Text, View } from 'react-native';
import React from 'react';

type Game = {
  id: number;
  name: string;
  vote_average: number;
  description: string;
  thumbnail: string;
  age_ratings: number;
  cover: string;
  first_release_date: string;
  release_dates: string;
  storyline: string;
  summary: string;
  videos: string;
  platforms: string;
};

const GameDetail = () => {
  return (
    <View>
      <Text>game-detail</Text>
    </View>
  );
};

export default GameDetail;
