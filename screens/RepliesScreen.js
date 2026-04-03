import { Feather } from "@expo/vector-icons";
import { useMemo } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PostCard from "../components/PostCard";
import { useAppContext } from "../context/AppContext";

export default function RepliesScreen({ navigation, route }) {
  const { getPostById, themeMode } = useAppContext();
  const isDark = themeMode === "dark";
  const post = getPostById(route.params?.postId);

  const replies = useMemo(() => post?.repliesData ?? [], [post]);

  if (!post) {
    return (
      <SafeAreaView className={`flex-1 items-center justify-center px-6 ${isDark ? "bg-firefly-950" : "bg-firefly-50"}`} edges={["top"]}>
        <Text className={`text-base font-semibold ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>Thread not found</Text>
        <Text className="mt-2 text-center text-sm leading-6 text-firefly-300">
          This post is no longer available in the current mock feed.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-firefly-950" : "bg-firefly-50"}`} edges={["top"]}>
      <View className={`flex-row items-center border-b px-4 py-3 ${isDark ? "border-firefly-700" : "border-firefly-200"}`}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.97 : 1 }] }]}
          className="mr-3 rounded-full p-2"
        >
          <Feather name="arrow-left" size={20} color={isDark ? "#e3f4f7" : "#121c1d"} />
        </Pressable>
        <View>
          <Text className={`text-base font-semibold ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>Replies</Text>
          <Text className="mt-0.5 text-xs text-firefly-300">{post.replies} conversations on this thread</Text>
        </View>
      </View>

      <FlatList
        data={replies}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Show the original thread above its reply list. */}
            <PostCard post={post} visible />
            <View className={`border-b px-4 py-3 ${isDark ? "border-firefly-700" : "border-firefly-200"}`}>
              <Text className="text-xs font-semibold uppercase tracking-[1.4px] text-firefly-300">Conversation</Text>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View className="px-4 py-10">
            <Text className={`text-sm font-semibold ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>No replies yet</Text>
            <Text className="mt-2 text-sm leading-6 text-firefly-300">This mock post is ready for replies, but the conversation is still empty.</Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <PostCard
            post={item}
            visible
            index={index}
            onReplyPress={() => navigation.navigate("Replies", { postId: item.id })}
          />
        )}
      />
    </SafeAreaView>
  );
}
