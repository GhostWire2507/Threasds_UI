import { Feather, Ionicons } from "@expo/vector-icons";
import { Animated, Pressable, Text, View } from "react-native";
import { useEffect, useRef } from "react";

function StatButton({ onPress, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.97 : 1 }] }]}
      className="mr-4"
    >
      {children}
    </Pressable>
  );
}

export default function ActionBar({
  liked,
  likes,
  replies,
  reposts,
  shares,
  onLikePress,
  onReplyPress
}) {
  const likeScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!liked) {
      return;
    }

    Animated.sequence([
      Animated.spring(likeScale, {
        toValue: 1.22,
        useNativeDriver: true,
        friction: 4
      }),
      Animated.spring(likeScale, {
        toValue: 1,
        useNativeDriver: true,
        friction: 4
      })
    ]).start();
  }, [liked, likeScale]);

  return (
    <View className="mt-3 flex-row items-center">
      <StatButton onPress={onLikePress}>
        <Animated.View style={{ transform: [{ scale: likeScale }] }} className="flex-row items-center">
          <Ionicons name={liked ? "heart" : "heart-outline"} size={22} color={liked ? "#e3f4f7" : "#78a2a8"} />
          <Text className="ml-1 text-xs text-firefly-300">{likes}</Text>
        </Animated.View>
      </StatButton>

      <StatButton onPress={onReplyPress}>
        <View className="flex-row items-center">
          <Feather name="message-circle" size={20} color="#78a2a8" />
          <Text className="ml-1 text-xs text-firefly-300">{replies}</Text>
        </View>
      </StatButton>

      <StatButton onPress={() => {}}>
        <View className="flex-row items-center">
          <Feather name="repeat" size={20} color="#78a2a8" />
          <Text className="ml-1 text-xs text-firefly-300">{reposts}</Text>
        </View>
      </StatButton>

      <StatButton onPress={() => {}}>
        <View className="flex-row items-center">
          <Feather name="send" size={18} color="#78a2a8" />
          <Text className="ml-1 text-xs text-firefly-300">{shares}</Text>
        </View>
      </StatButton>
    </View>
  );
}
