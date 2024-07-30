import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles
}: {
  title: string;
  handlePress: () => void;
  containerStyles: any;
  textStyles: any;
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={` bg-orange-400 rounded-xl   justify-center items-center ${containerStyles}`}
    >
      <Text className={`text-psemibold text-lg text-white ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
