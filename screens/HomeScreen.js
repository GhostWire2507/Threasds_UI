import { useCallback, useMemo, useRef, useState } from "react";
import { FlatList, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PostCard from "../components/PostCard";
import { useAppContext } from "../context/AppContext";

const threadsLogo = require("../assets/threads-logo-black-background-vector_1017-45262.jpg");

export default function HomeScreen({ navigation }) {
  const { posts, themeMode } = useAppContext();
  const [visibleIds, setVisibleIds] = useState({});
  const isDark = themeMode === "dark";
  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 45 }).current;

  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    const next = {};
    viewableItems.forEach((item) => {
      next[item.item.id] = true;
    });
    setVisibleIds(next);
  }).current;

  const renderItem = useCallback(
    ({ item, index }) => (
      <PostCard
        post={item}
        index={index}
        visible={Boolean(visibleIds[item.id])}
        onProfilePress={() => navigation.navigate("Profile")}
        onReplyPress={() => navigation.navigate("Replies", { postId: item.id })}
      />
    ),
    [navigation, visibleIds]
  );

  const logo = useMemo(
    () => (
      <View className={`items-center justify-center py-3 ${isDark ? "bg-firefly-950" : "bg-firefly-50"}`}>
        <Image source={threadsLogo} className="h-10 w-10 rounded-full" resizeMode="cover" />
      </View>
    ),
    [isDark]
  );

  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-firefly-950" : "bg-firefly-50"}`} edges={["top"]}>
      {logo}
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </SafeAreaView>
  );
}
