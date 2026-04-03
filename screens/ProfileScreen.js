import { Feather } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import { FlatList, Modal, Pressable, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "../components/Avatar";
import PostCard from "../components/PostCard";
import { useAppContext } from "../context/AppContext";

function SettingsSheet({ visible, onClose }) {
  const {
    themeMode,
    setThemeMode,
    soundEnabled,
    setSoundEnabled
  } = useAppContext();
  const isDark = themeMode === "dark";

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 justify-end bg-black/45">
        <View className={`rounded-t-[28px] px-5 pb-10 pt-4 ${isDark ? "bg-firefly-900" : "bg-firefly-100"}`}>
          <View className="mb-5 flex-row items-center justify-between">
            <Text className={`text-lg font-semibold ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>Settings</Text>
            <Pressable onPress={onClose} className="rounded-full p-2">
              <Feather name="x" size={20} color={isDark ? "#e3f4f7" : "#121c1d"} />
            </Pressable>
          </View>

          <View className={`mb-3 flex-row items-center justify-between rounded-3xl border px-4 py-4 ${isDark ? "border-firefly-700 bg-firefly-950" : "border-firefly-200 bg-firefly-50"}`}>
            <View>
              <Text className={`text-sm font-semibold ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>Dark mode</Text>
              <Text className="mt-1 text-xs text-firefly-300">Switch between dark and light themes</Text>
            </View>
            <Switch value={isDark} onValueChange={(value) => setThemeMode(value ? "dark" : "light")} />
          </View>

          <View className={`flex-row items-center justify-between rounded-3xl border px-4 py-4 ${isDark ? "border-firefly-700 bg-firefly-950" : "border-firefly-200 bg-firefly-50"}`}>
            <View>
              <Text className={`text-sm font-semibold ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>Sound by default</Text>
              <Text className="mt-1 text-xs text-firefly-300">Videos start with sound when enabled</Text>
            </View>
            <Switch value={soundEnabled} onValueChange={setSoundEnabled} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default function ProfileScreen({ navigation }) {
  const { posts, profileUser, themeMode } = useAppContext();
  const [activeTab, setActiveTab] = useState("threads");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const isDark = themeMode === "dark";

  const profilePosts = useMemo(() => {
    if (activeTab === "replies") {
      return posts.filter((post) => post.replies > 5);
    }

    return posts.filter((post) => post.user.id === profileUser.id).length
      ? posts.filter((post) => post.user.id === profileUser.id)
      : posts.slice(0, 2).map((post) => ({ ...post, user: profileUser }));
  }, [activeTab, posts, profileUser]);

  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-firefly-950" : "bg-firefly-50"}`} edges={["top"]}>
      <FlatList
        data={profilePosts}
        keyExtractor={(item) => `${activeTab}-${item.id}`}
        ListHeaderComponent={
          <View className="px-4 pt-1">
            <View className="mb-6 flex-row items-start justify-between">
              <View className="flex-1 pr-5">
                <Text className={`text-[28px] font-bold ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>{profileUser.name}</Text>
                <Text className={`mt-1 text-sm ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>@{profileUser.username}</Text>
                <Text className="mt-3 text-sm leading-6 text-firefly-300">{profileUser.bio}</Text>
                <Text className="mt-3 text-xs text-firefly-300">
                  {profileUser.followers} followers · {profileUser.following} following
                </Text>
              </View>

              <View className="items-end">
                <Pressable
                  onPress={() => setSettingsOpen(true)}
                  style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.97 : 1 }] }]}
                  className="mb-4 rounded-full border border-firefly-700 p-2"
                >
                  <Feather name="menu" size={20} color={isDark ? "#e3f4f7" : "#121c1d"} />
                </Pressable>
                <Avatar uri={profileUser.avatar} size={72} showPlus={false} />
              </View>
            </View>

            <View className={`mb-2 flex-row rounded-full p-1 ${isDark ? "bg-firefly-900" : "bg-firefly-100"}`}>
              {["threads", "replies"].map((tab) => {
                const active = activeTab === tab;
                return (
                  <Pressable
                    key={tab}
                    onPress={() => setActiveTab(tab)}
                    style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.98 : 1 }] }]}
                    className={`flex-1 rounded-full px-4 py-3 ${active ? (isDark ? "bg-firefly-950" : "bg-firefly-50") : ""}`}
                  >
                    <Text className={`text-center text-sm font-semibold ${active ? (isDark ? "text-firefly-50" : "text-firefly-900") : "text-firefly-300"}`}>
                      {tab === "threads" ? "Threads" : "Replies"}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
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

      <SettingsSheet visible={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </SafeAreaView>
  );
}
