import { Feather } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Animated, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "../components/Avatar";
import { useAppContext } from "../context/AppContext";

export default function CreatePostScreen({ navigation }) {
  const { createPost, profileUser, themeMode } = useAppContext();
  const [text, setText] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const isDark = themeMode === "dark";
  const slide = useRef(new Animated.Value(32)).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slide, {
        toValue: 0,
        duration: 260,
        useNativeDriver: true
      }),
      Animated.timing(fade, {
        toValue: 1,
        duration: 240,
        useNativeDriver: true
      })
    ]).start();
  }, [fade, slide]);

  const handlePost = () => {
    createPost({ text, mediaUrl });
    setText("");
    setMediaUrl("");
    navigation.goBack();
  };

  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-firefly-950" : "bg-firefly-50"}`} edges={["top"]}>
      <Animated.View style={{ opacity: fade, transform: [{ translateY: slide }] }} className="flex-1 px-4">
        <View className="mb-5 flex-row items-center justify-between py-3">
          <Pressable
            onPress={() => navigation.goBack()}
            style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.97 : 1 }] }]}
            className="rounded-full p-2"
          >
            <Feather name="x" size={22} color={isDark ? "#e3f4f7" : "#121c1d"} />
          </Pressable>

          <Text className={`text-base font-semibold ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>New thread</Text>

          <Pressable
            onPress={handlePost}
            style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.97 : 1 }] }]}
            className={`rounded-full px-4 py-2 ${text.trim() || mediaUrl.trim() ? "bg-firefly-50" : "bg-firefly-700"}`}
          >
            <Text className={`text-sm font-semibold ${text.trim() || mediaUrl.trim() ? "text-firefly-950" : "text-firefly-300"}`}>
              Post
            </Text>
          </Pressable>
        </View>

        <View className="flex-row">
          <View className="mr-3">
            <Avatar uri={profileUser.avatar} />
          </View>

          <View className="flex-1">
            <Text className={`mb-2 text-sm font-semibold ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>
              {profileUser.username}
            </Text>
            <TextInput
              value={text}
              onChangeText={setText}
              placeholder="What's new?"
              placeholderTextColor={isDark ? "#78a2a8" : "#4f6c70"}
              multiline
              className={`min-h-[140px] text-[16px] leading-6 ${isDark ? "text-firefly-50" : "text-firefly-900"}`}
            />
            <TextInput
              value={mediaUrl}
              onChangeText={setMediaUrl}
              placeholder="Paste image or video URL"
              placeholderTextColor={isDark ? "#78a2a8" : "#4f6c70"}
              autoCapitalize="none"
              className={`mt-3 rounded-3xl border px-4 py-3 text-sm ${isDark ? "border-firefly-700 bg-firefly-900 text-firefly-50" : "border-firefly-200 bg-firefly-100 text-firefly-900"}`}
            />
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}
