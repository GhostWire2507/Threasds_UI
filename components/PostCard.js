import { Feather } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";
import { useEffect, useMemo, useRef, useState } from "react";
import { ActivityIndicator, Animated, Image, Pressable, Text, View } from "react-native";
import ActionBar from "./ActionBar";
import Avatar from "./Avatar";
import ThreadLine from "./ThreadLine";
import { useAppContext } from "../context/AppContext";

function ReplyPreview({ users }) {
  return (
    <View className="mt-3 flex-row items-center">
      <View className="mr-3 flex-row">
        {users.map((user, index) => (
          <Image
            key={user.id}
            source={{ uri: user.avatar }}
            className="-mr-2 h-6 w-6 rounded-full border border-firefly-950"
            style={{ zIndex: users.length - index }}
          />
        ))}
      </View>
      <Text className="text-xs text-firefly-300">replies from people you follow</Text>
    </View>
  );
}

function MediaAttachment({ media, visible }) {
  const { autoplayVideos, soundEnabled } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(!soundEnabled);

  useEffect(() => {
    setMuted(!soundEnabled);
  }, [soundEnabled]);

  if (!media) {
    return null;
  }

  if (!visible) {
    return (
      <View className="mt-3 h-64 items-center justify-center rounded-3xl border border-firefly-700 bg-firefly-900">
        <Text className="text-xs text-firefly-300">Media loads when visible</Text>
      </View>
    );
  }

  if (media.type === "video") {
    return (
      <Pressable
        onPress={() => setMuted((current) => !current)}
        className="mt-3 overflow-hidden rounded-3xl border border-firefly-700 bg-firefly-900"
      >
        {loading ? (
          <View className="absolute inset-0 z-10 h-64 items-center justify-center bg-firefly-900/80">
            <ActivityIndicator color="#e3f4f7" />
          </View>
        ) : null}
        <Video
          source={{ uri: media.url }}
          className="h-64 w-full"
          resizeMode={ResizeMode.COVER}
          isMuted={muted}
          shouldPlay={autoplayVideos && visible}
          isLooping
          onLoadStart={() => setLoading(true)}
          onReadyForDisplay={() => setLoading(false)}
        />
        <View className="absolute bottom-3 right-3 rounded-full bg-firefly-950/80 px-3 py-1.5">
          <Text className="text-xs font-medium text-firefly-50">{muted ? "Muted" : "Sound on"}</Text>
        </View>
      </Pressable>
    );
  }

  return (
    <View className="mt-3 overflow-hidden rounded-3xl border border-firefly-700 bg-firefly-900">
      {loading ? (
        <View className="absolute inset-0 z-10 h-64 items-center justify-center bg-firefly-900/80">
          <ActivityIndicator color="#e3f4f7" />
        </View>
      ) : null}
      <Image
        source={{ uri: media.url }}
        className="h-64 w-full"
        resizeMode="cover"
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
}

export default function PostCard({ post, visible = true, onProfilePress, index = 0 }) {
  const { toggleLike, themeMode } = useAppContext();
  const isDark = themeMode === "dark";
  const entrance = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(entrance, {
      toValue: 1,
      duration: 380,
      delay: Math.min(index * 45, 240),
      useNativeDriver: true
    }).start();
  }, [entrance, index]);

  const animatedStyle = useMemo(
    () => ({
      opacity: entrance,
      transform: [
        {
          translateY: entrance.interpolate({
            inputRange: [0, 1],
            outputRange: [14, 0]
          })
        }
      ]
    }),
    [entrance]
  );

  return (
    <Animated.View
      style={animatedStyle}
      className={`px-4 py-4 ${isDark ? "border-firefly-700" : "border-firefly-200"} border-b`}
    >
      <View className="flex-row">
        <View className="mr-3 items-center">
          <Pressable onPress={onProfilePress}>
            <Avatar uri={post.user.avatar} />
          </Pressable>
          {post.isReplyThread ? <ThreadLine className="mt-2" /> : null}
        </View>

        <View className="flex-1">
          <View className="flex-row items-start justify-between">
            <View className="flex-1 pr-4">
              <Pressable onPress={onProfilePress}>
                <Text className={`text-sm font-semibold ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>
                  {post.user.username}
                </Text>
              </Pressable>
              <Text className="mt-0.5 text-xs text-firefly-300">{post.timestamp}</Text>
            </View>

            <Pressable
              style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.97 : 1 }] }]}
              className="rounded-full p-1"
            >
              <Feather name="more-horizontal" size={18} color={isDark ? "#78a2a8" : "#4f6c70"} />
            </Pressable>
          </View>

          <Text className={`mt-2 text-[15px] leading-6 ${isDark ? "text-firefly-50" : "text-firefly-900"}`}>
            {post.content}
          </Text>

          <MediaAttachment media={post.media} visible={visible} />

          <ActionBar
            liked={post.liked}
            likes={post.likes}
            replies={post.replies}
            reposts={post.reposts}
            shares={post.shares}
            onLikePress={() => toggleLike(post.id)}
          />

          {post.replyPreview?.length ? <ReplyPreview users={post.replyPreview} /> : null}
        </View>
      </View>
    </Animated.View>
  );
}
