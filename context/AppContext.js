import { createContext, useContext, useMemo, useState } from "react";
import { mockNotifications, mockPosts, mockUsers, profileUser } from "../data/mockData";

const AppContext = createContext(null);

function inferMediaType(mediaUrl) {
  if (!mediaUrl) {
    return null;
  }

  const sanitizedUrl = mediaUrl.split("?")[0].toLowerCase();
  const isVideo = /\.(mp4|mov|webm|m4v)$/i.test(sanitizedUrl);

  return isVideo ? "video" : "image";
}

function findPost(posts, postId) {
  for (const post of posts) {
    if (post.id === postId) {
      return post;
    }

    // Replies can also open their own reply screen.
    const nestedMatch = findPost(post.repliesData ?? [], postId);

    if (nestedMatch) {
      return nestedMatch;
    }
  }

  return null;
}

function updatePostTree(posts, postId, updater) {
  return posts.map((post) => {
    if (post.id === postId) {
      return updater(post);
    }

    if (!post.repliesData?.length) {
      return post;
    }

    return {
      ...post,
      // Keep likes working for both feed posts and nested replies.
      repliesData: updatePostTree(post.repliesData, postId, updater)
    };
  });
}

export function AppProvider({ children }) {
  const [themeMode, setThemeMode] = useState("dark");
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [posts, setPosts] = useState(mockPosts);
  const [users, setUsers] = useState(mockUsers);
  const [notifications] = useState(mockNotifications);

  const toggleLike = (postId) => {
    setPosts((current) =>
      updatePostTree(current, postId, (post) => ({
        ...post,
        liked: !post.liked,
        likes: post.liked ? post.likes - 1 : post.likes + 1
      }))
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

    const mediaType = inferMediaType(trimmedMedia);

    // New posts are inserted at the top of the feed.
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
      replyPreview: [],
      isReplyThread: false,
      repliesData: []
    };

    setPosts((current) => [newPost, ...current]);
  };

  const getPostById = (postId) => findPost(posts, postId);

  const value = useMemo(
    () => ({
      themeMode,
      setThemeMode,
      soundEnabled,
      setSoundEnabled,
      posts,
      users,
      notifications,
      profileUser,
      toggleLike,
      toggleFollow,
      createPost,
      getPostById
    }),
    [themeMode, soundEnabled, posts, users, notifications]
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
