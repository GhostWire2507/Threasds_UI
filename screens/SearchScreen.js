import { Feather } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "../components/Avatar";
import { useAppContext } from "../context/AppContext";

export default function SearchScreen() {
  const { users, toggleFollow, themeMode } = useAppContext();
  const [query, setQuery] = useState("");
  const isDark = themeMode === "dark";

  const filteredUsers = useMemo(
    () =>
      users.filter((user) =>
        `${user.name} ${user.username}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query, users]
  );

  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-firefly-950" : "bg-firefly-50"}`} edges={["top"]}>
      <View className="px-4 pb-3">
        <Text className={`mb-4 text-[32px] font-bold ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>Search</Text>
        <View className={`flex-row items-center rounded-full border px-4 py-3 ${isDark ? "border-firefly-700 bg-firefly-900" : "border-firefly-200 bg-firefly-100"}`}>
          <Feather name="search" size={18} color={isDark ? "#78a2a8" : "#4f6c70"} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search"
            placeholderTextColor={isDark ? "#78a2a8" : "#4f6c70"}
            className={`ml-3 flex-1 text-sm ${isDark ? "text-firefly-50" : "text-firefly-900"}`}
          />
        </View>
      </View>

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className={`mx-4 flex-row items-center justify-between border-b py-4 ${isDark ? "border-firefly-700" : "border-firefly-200"}`}>
            <View className="flex-row items-center">
              <Avatar uri={item.avatar} showPlus={false} />
              <View className="ml-3">
                <Text className={`text-sm font-semibold ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>{item.username}</Text>
                <Text className="mt-0.5 text-xs text-firefly-300">{item.name}</Text>
                <Text className="mt-1 max-w-[220px] text-xs text-firefly-300">{item.bio}</Text>
              </View>
            </View>

            <Pressable
              onPress={() => toggleFollow(item.id)}
              style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.97 : 1 }] }]}
              className={`rounded-full border px-4 py-2 ${item.isFollowing ? (isDark ? "border-firefly-700 bg-firefly-900" : "border-firefly-200 bg-firefly-100") : "border-firefly-50 bg-firefly-50"}`}
            >
              <Text className={`text-xs font-semibold ${item.isFollowing ? "text-firefly-300" : "text-firefly-950"}`}>
                {item.isFollowing ? "Following" : "Follow"}
              </Text>
            </Pressable>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
