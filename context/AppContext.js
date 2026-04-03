import { createContext, useContext, useMemo, useState } from "react";
import { mockNotifications, mockPosts, mockUsers, profileUser } from "../data/mockData";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [themeMode, setThemeMode] = useState("dark");
  const [autoplayVideos, setAutoplayVideos] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [posts, setPosts] = useState(mockPosts);
  const [users, setUsers] = useState(mockUsers);
  const [notifications] = useState(mockNotifications);

  const toggleLike = (postId) => {
    setPosts((current) =>
      current.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1
            }
          : post
      )
    );
  };

  const toggleFollow = (userId) => {
    setUsers((current) =>
      current.map((user) =>
        user.id === userId ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  const createPost = ({ text, mediaUrl }) => {
    const trimmedText = text.trim();
    const trimmedMedia = mediaUrl.trim();

    if (!trimmedText && !trimmedMedia) {
      return;
    }

    const mediaType = trimmedMedia.match(/\.(mp4|mov|webm)$/i) ? "video" : trimmedMedia ? "image" : null;

    const newPost = {
      id: `post-${Date.now()}`,
      user: profileUser,
      timestamp: "now",
      content: trimmedText,
      media: trimmedMedia ? { type: mediaType, url: trimmedMedia } : null,
      liked: false,
      likes: 0,
      replies: 0,
      reposts: 0,
      shares: 0,
      replyPreview: users.slice(0, 3),
      isReplyThread: true
    };

    setPosts((current) => [newPost, ...current]);
  };

  const value = useMemo(
    () => ({
      themeMode,
      setThemeMode,
      autoplayVideos,
      setAutoplayVideos,
      soundEnabled,
      setSoundEnabled,
      posts,
      users,
      notifications,
      profileUser,
      toggleLike,
      toggleFollow,
      createPost
    }),
    [themeMode, autoplayVideos, soundEnabled, posts, users, notifications]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }

  return context;
}
