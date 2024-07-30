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
      className={` bg-blue-500 rounded-xl min-h-[62px]  justify-center items-center ${containerStyles}`}
    >
      <Text className={`text-psemibold text-lg text-white ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
