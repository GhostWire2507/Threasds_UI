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
  },
  {
    id: "user-5",
    name: "Maya Petersen",
    username: "mayapetersen",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    bio: "Creative direction, snapshots, and quiet routines.",
    isFollowing: true
  },
  {
    id: "user-6",
    name: "Kabelo Maseko",
    username: "kabcode",
    avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80",
    bio: "Frontend notes from the build phase.",
    isFollowing: false
  },
  {
    id: "user-7",
    name: "Amina Noor",
    username: "aminanoor",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    bio: "Collecting references for motion, texture, and pace.",
    isFollowing: true
  },
  {
    id: "user-8",
    name: "Luca Moretti",
    username: "luca.fm",
    avatar: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80",
    bio: "Filming city fragments and interface studies.",
    isFollowing: false
  }
];

const sampleVideos = {
  joyrides: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  blazes: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  escape: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscape.mp4",
  elephants: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
};

const createReply = ({
  id,
  user,
  timestamp,
  content,
  likes = 0,
  replies = 0,
  reposts = 0,
  shares = 0,
  liked = false,
  media = null,
  replyPreview = []
}) => ({
  id,
  user,
  timestamp,
  content,
  media,
  liked,
  likes,
  replies,
  reposts,
  shares,
  replyPreview,
  isReplyThread: replies > 0,
  repliesData: []
});

const postOneReplies = [
  createReply({
    id: "post-1-reply-1",
    user: mockUsers[1],
    timestamp: "1m",
    content: "That disappearing-UI feeling is exactly it. The text breathes because the chrome stays quiet.",
    likes: 18,
    replies: 2,
    reposts: 1,
    shares: 0,
    replyPreview: [mockUsers[2], mockUsers[4]]
  }),
  createReply({
    id: "post-1-reply-2",
    user: mockUsers[2],
    timestamp: "just now",
    content: "Spacing is doing editorial work here. You can feel the rhythm before you can explain it.",
    likes: 13,
    replies: 1,
    reposts: 0,
    shares: 0,
    replyPreview: [mockUsers[0]]
  }),
  createReply({
    id: "post-1-reply-3",
    user: mockUsers[3],
    timestamp: "just now",
    content: "I kept zooming into the margins because they are carrying the whole composition."
  })
];

const postTwoReplies = [
  createReply({
    id: "post-2-reply-1",
    user: mockUsers[0],
    timestamp: "8m",
    content: "That rise is subtle enough to feel premium. It never competes with the post itself.",
    likes: 20,
    replies: 1,
    reposts: 1,
    shares: 0,
    replyPreview: [mockUsers[5]]
  }),
  createReply({
    id: "post-2-reply-2",
    user: mockUsers[2],
    timestamp: "6m",
    content: "Would love to see that transition paired with a soft blur on the media edge.",
    likes: 9,
    replies: 0,
    reposts: 0,
    shares: 0
  }),
  createReply({
    id: "post-2-reply-3",
    user: mockUsers[6],
    timestamp: "4m",
    content: "The motion timing reads polished on first glance. Nice restraint.",
    likes: 7,
    replies: 0,
    reposts: 0,
    shares: 0
  })
];

const postThreeReplies = [
  createReply({
    id: "post-3-reply-1",
    user: mockUsers[3],
    timestamp: "33m",
    content: "Exactly. Feed video should feel like a glance, not a demand for attention.",
    likes: 14,
    replies: 1,
    reposts: 0,
    shares: 0,
    replyPreview: [mockUsers[0]]
  }),
  createReply({
    id: "post-3-reply-2",
    user: mockUsers[0],
    timestamp: "29m",
    content: "Looping without the hard restart is the part users notice even if they never say it.",
    likes: 11,
    replies: 0,
    reposts: 0,
    shares: 0
  })
];

const postFourReplies = [
  createReply({
    id: "post-4-reply-1",
    user: mockUsers[1],
    timestamp: "58m",
    content: "The kind of compliment every product team wants."
  }),
  createReply({
    id: "post-4-reply-2",
    user: mockUsers[2],
    timestamp: "54m",
    content: "When the interaction disappears, the intent lands harder.",
    likes: 5
  })
];

const postFiveReplies = [
  createReply({
    id: "post-5-reply-1",
    user: mockUsers[5],
    timestamp: "1h",
    content: "That palette would make a really good onboarding moment too.",
    likes: 10
  }),
  createReply({
    id: "post-5-reply-2",
    user: mockUsers[0],
    timestamp: "57m",
    content: "The film grain in that image sells the mood immediately.",
    likes: 6
  })
];

const postSixReplies = [
  createReply({
    id: "post-6-reply-1",
    user: mockUsers[7],
    timestamp: "1h",
    content: "This clip feels perfect for autoplay because the first frame already has energy.",
    likes: 17,
    replies: 1,
    replyPreview: [mockUsers[4]]
  }),
  createReply({
    id: "post-6-reply-2",
    user: mockUsers[4],
    timestamp: "58m",
    content: "The loop point is clean. No jolt when it repeats.",
    likes: 8
  }),
  createReply({
    id: "post-6-reply-3",
    user: mockUsers[2],
    timestamp: "49m",
    content: "Watching this in a feed makes me want a tiny progress hint at the bottom.",
    likes: 3
  })
];

const postSevenReplies = [
  createReply({
    id: "post-7-reply-1",
    user: mockUsers[1],
    timestamp: "1h",
    content: "You can tell the copywriting and UI are finally speaking the same language.",
    likes: 12
  })
];

const postEightReplies = [
  createReply({
    id: "post-8-reply-1",
    user: mockUsers[6],
    timestamp: "2h",
    content: "The color story here is beautiful. Looks like a campaign frame.",
    likes: 9
  }),
  createReply({
    id: "post-8-reply-2",
    user: mockUsers[0],
    timestamp: "1h",
    content: "Would make a strong profile header image too.",
    likes: 4
  })
];

const postNineReplies = [
  createReply({
    id: "post-9-reply-1",
    user: mockUsers[3],
    timestamp: "2h",
    content: "The pacing on this sample is ideal for testing autoplay on slower scrolling.",
    likes: 11
  }),
  createReply({
    id: "post-9-reply-2",
    user: mockUsers[5],
    timestamp: "1h",
    content: "I like that the scene has movement without turning into visual noise.",
    likes: 8
  })
];

const postTenReplies = [
  createReply({
    id: "post-10-reply-1",
    user: mockUsers[4],
    timestamp: "2h",
    content: "Notes like this are why good UI teams get faster over time.",
    likes: 6
  }),
  createReply({
    id: "post-10-reply-2",
    user: mockUsers[2],
    timestamp: "1h",
    content: "Tiny defaults are everything. Users feel them before they see them.",
    likes: 5
  })
];

const postElevenReplies = [
  createReply({
    id: "post-11-reply-1",
    user: mockUsers[7],
    timestamp: "3h",
    content: "This is a strong sample for testing how the player behaves when cards scroll fast.",
    likes: 7
  }),
  createReply({
    id: "post-11-reply-2",
    user: mockUsers[1],
    timestamp: "2h",
    content: "Muted autoplay with tap-for-sound feels right for this kind of feed.",
    likes: 10
  })
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
    isReplyThread: true,
    repliesData: postOneReplies
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
    replyPreview: [mockUsers[0], mockUsers[2], mockUsers[6]],
    isReplyThread: true,
    repliesData: postTwoReplies
  },
  {
    id: "post-3",
    user: mockUsers[2],
    timestamp: "41m",
    content: "Testing video behavior in a social feed. It should feel present, not demanding.",
    media: {
      type: "video",
      url: sampleVideos.joyrides
    },
    liked: false,
    likes: 96,
    replies: 7,
    reposts: 6,
    shares: 5,
    replyPreview: [mockUsers[3], mockUsers[0]],
    isReplyThread: true,
    repliesData: postThreeReplies
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
    isReplyThread: true,
    repliesData: postFourReplies
  },
  {
    id: "post-5",
    user: mockUsers[4],
    timestamp: "1h",
    content: "Pulled together a few color references for a calmer creator profile. Warm neutrals, softer highlights, fewer hard edges.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
    },
    liked: false,
    likes: 143,
    replies: 15,
    reposts: 9,
    shares: 4,
    replyPreview: [mockUsers[5], mockUsers[0]],
    isReplyThread: true,
    repliesData: postFiveReplies
  },
  {
    id: "post-6",
    user: mockUsers[5],
    timestamp: "1h",
    content: "Adding another sample clip so autoplay can be tested against faster movement and stronger contrast.",
    media: {
      type: "video",
      url: sampleVideos.blazes
    },
    liked: false,
    likes: 188,
    replies: 19,
    reposts: 14,
    shares: 9,
    replyPreview: [mockUsers[7], mockUsers[4], mockUsers[2]],
    isReplyThread: true,
    repliesData: postSixReplies
  },
  {
    id: "post-7",
    user: mockUsers[6],
    timestamp: "2h",
    content: "The strongest social apps give text enough room to feel authored, not just posted.",
    media: null,
    liked: true,
    likes: 121,
    replies: 8,
    reposts: 5,
    shares: 3,
    replyPreview: [mockUsers[1]],
    isReplyThread: true,
    repliesData: postSevenReplies
  },
  {
    id: "post-8",
    user: mockUsers[7],
    timestamp: "2h",
    content: "Saved this frame because it feels like a launch poster for a smaller, more thoughtful product.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
    },
    liked: false,
    likes: 77,
    replies: 6,
    reposts: 2,
    shares: 2,
    replyPreview: [mockUsers[6], mockUsers[0]],
    isReplyThread: true,
    repliesData: postEightReplies
  },
  {
    id: "post-9",
    user: mockUsers[3],
    timestamp: "3h",
    content: "One more video test. This one has longer scenes, which makes it useful for checking pause and resume as cards enter the viewport.",
    media: {
      type: "video",
      url: sampleVideos.escape
    },
    liked: false,
    likes: 165,
    replies: 12,
    reposts: 7,
    shares: 6,
    replyPreview: [mockUsers[5], mockUsers[4]],
    isReplyThread: true,
    repliesData: postNineReplies
  },
  {
    id: "post-10",
    user: mockUsers[0],
    timestamp: "4h",
    content: "Documenting the defaults I keep coming back to: rounded media, quiet borders, slightly tighter timestamps, and generous line height.",
    media: null,
    liked: false,
    likes: 92,
    replies: 9,
    reposts: 4,
    shares: 1,
    replyPreview: [mockUsers[4], mockUsers[2]],
    isReplyThread: true,
    repliesData: postTenReplies
  },
  {
    id: "post-11",
    user: mockUsers[1],
    timestamp: "5h",
    content: "Keeping a fourth video link in the mix so the feed can show repeated autoplay behavior across multiple cards during longer scroll sessions.",
    media: {
      type: "video",
      url: sampleVideos.elephants
    },
    liked: false,
    likes: 138,
    replies: 10,
    reposts: 6,
    shares: 4,
    replyPreview: [mockUsers[7], mockUsers[1]],
    isReplyThread: true,
    repliesData: postElevenReplies
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
    text: "replied: \"that transition timing feels just right.\"",
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
