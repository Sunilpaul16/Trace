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
      className={` bg-orange-400 rounded-xl min-h-[50]   justify-center items-center ${containerStyles}`}
    >
      <Text
        className={`text-semibold text-lg p-3 outline-gray-600  text-white ${textStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
