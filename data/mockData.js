export const profileUser = {
  id: "me",
  name: "Lerato Mokoena",
  username: "lerato.design",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  bio: "Designing thoughtful interfaces and documenting tiny moments.",
  followers: "24.8K",
  following: 312
};

export const mockUsers = [
  {
    id: "user-1",
    name: "Ari Sato",
    username: "arisato",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    bio: "Product designer with a love for tiny details.",
    isFollowing: false
  },
  {
    id: "user-2",
    name: "Neo Dube",
    username: "neodube",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    bio: "Building mobile ideas after midnight.",
    isFollowing: true
  },
  {
    id: "user-3",
    name: "Tumi Ndlovu",
    username: "tumiwrites",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80",
    bio: "Writing sharp product notes and softer captions.",
    isFollowing: false
  },
  {
    id: "user-4",
    name: "Samir Khan",
    username: "samirk",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    bio: "Video creator and interface tinkerer.",
    isFollowing: false
  }
];

export const mockPosts = [
  {
    id: "post-1",
    user: mockUsers[0],
    timestamp: "2m",
    content: "Threads works best when the interface disappears and the writing stays in focus. Tiny spacing choices do most of the heavy lifting.",
    media: null,
    liked: false,
    likes: 84,
    replies: 11,
    reposts: 4,
    shares: 2,
    replyPreview: [mockUsers[1], mockUsers[2], mockUsers[3]],
    isReplyThread: true
  },
  {
    id: "post-2",
    user: mockUsers[1],
    timestamp: "18m",
    content: "Shot a quick motion study for a feed card transition. Soft fade, small rise, nothing loud.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80"
    },
    liked: true,
    likes: 217,
    replies: 24,
    reposts: 13,
    shares: 8,
    replyPreview: [mockUsers[0], mockUsers[2]],
    isReplyThread: true
  },
  {
    id: "post-3",
    user: mockUsers[2],
    timestamp: "41m",
    content: "Testing video behavior in a social feed. It should feel present, not demanding.",
    media: {
      type: "video",
      url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
    },
    liked: false,
    likes: 96,
    replies: 7,
    reposts: 6,
    shares: 5,
    replyPreview: [mockUsers[3], mockUsers[0]],
    isReplyThread: true
  },
  {
    id: "post-4",
    user: mockUsers[3],
    timestamp: "1h",
    content: "The best UI compliment is when nobody mentions the UI because everything just flows.",
    media: null,
    liked: false,
    likes: 53,
    replies: 3,
    reposts: 1,
    shares: 0,
    replyPreview: [mockUsers[1], mockUsers[2]],
    isReplyThread: true
  }
];

export const mockNotifications = [
  {
    id: "notif-1",
    type: "like",
    user: mockUsers[0],
    text: "liked your thread",
    timestamp: "4m"
  },
  {
    id: "notif-2",
    type: "reply",
    user: mockUsers[2],
    text: "replied: “that transition timing feels just right.”",
    timestamp: "16m"
  },
  {
    id: "notif-3",
    type: "follow",
    user: mockUsers[3],
    text: "followed you",
    timestamp: "1h"
  }
];
