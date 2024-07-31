import React from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';

const MediaCard = ({
  item,
  onPress,
  isFocused
}: {
  item: any;
  onPress: any;
  isFocused: any;
}) => {
  const animatedScale = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.spring(animatedScale, {
      toValue: isFocused ? 1.1 : 1,
      useNativeDriver: true
    }).start();
  }, [isFocused]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={{
          transform: [{ scale: animatedScale }],
          marginHorizontal: 8
        }}
      >
        <View className="rounded-2xl overflow-hidden bg-gray-800 shadow-lg">
          <Image
            source={{ uri: item.imageUrl }}
            className="h-[200px] w-[150px]"
          />
          <View className="p-2">
            <Text
              className="text-white text-center font-bold"
              numberOfLines={2}
            >
              {item.title}
            </Text>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default MediaCard;
