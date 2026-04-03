export const profileUser = {
  id: "me",
  name: "Mokopane Makhetha",
  username: "mokopane.makhetha",
  avatar: require("../assets/profle/istockphoto-1335941248-612x612.jpg"),
  bio: "Designing thoughtful interfaces, filming product moments, and refining social UI.",
  followers: "24.8K",
  following: 312
};

export const mockUsers = [
  {
    id: "user-1",
    name: "Ari Sato",
    username: "arisato",
    avatar: require("../assets/people/360_F_260036118_AUYppgsODQeTCnbu0OXGNDXB8EVzpxKq.jpg"),
    bio: "Product designer with a love for tiny details.",
    isFollowing: false
  },
  {
    id: "user-2",
    name: "Neo Dube",
    username: "neodube",
    avatar: require("../assets/people/close-up-portrait-young-african-man-with-stubble_171337-1296.jpg"),
    bio: "Building mobile ideas after midnight.",
    isFollowing: true
  },  {
    id: "user-3",
    name: "Tumi Ndlovu",
    username: "tumiwrites",
    avatar: require("../assets/people/free-photo-of-portrait-of-a-woman-in-traditional-attire.jpeg"),
    bio: "Writing sharp product notes and softer captions.",
    isFollowing: false
  },
  {
    id: "user-4",
    name: "Samir Khan",
    username: "samirk",
    avatar: require("../assets/people/istockphoto-1587604256-612x612.jpg"),
    bio: "Video creator and interface tinkerer.",
    isFollowing: false
  },
  {
    id: "user-5",
    name: "Maya Petersen",
    username: "mayapetersen",
    avatar: require("../assets/people/London+portrait+photographer.jpg"),
    bio: "Creative direction, snapshots, and quiet routines.",
    isFollowing: true
  },
  {
    id: "user-6",
    name: "Kabelo Maseko",
    username: "kabcode",
    avatar: require("../assets/people/out-now.jpg"),
    bio: "Frontend notes from the build phase.",
    isFollowing: false
  },
  {
    id: "user-7",
    name: "Amina Noor",
    username: "aminanoor",
    avatar: require("../assets/people/photo-1544005313-94ddf0286df2.jpg"),
    bio: "Collecting references for motion, texture, and pace.",
    isFollowing: true
  },
  {
    id: "user-8",
    name: "Luca Moretti",
    username: "luca.fm",
    avatar: require("../assets/people/360_F_260036118_AUYppgsODQeTCnbu0OXGNDXB8EVzpxKq.jpg"),
    bio: "Filming city fragments and interface studies.",
    isFollowing: false
  }
];

const sampleImages = {
  joyrides: require("../assets/Photo_posts/pexels-bertellifotografia-18966455.jpg"),
  blazes: require("../assets/Photo_posts/pexels-bertellifotografia-19012062.jpg"),
  escape: require("../assets/Photo_posts/pexels-introspectivedsgn-30393930.jpg"),
  elephants: require("../assets/Photo_posts/pexels-jaralol-17091544.jpg")
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
    content: "Morning build session: tweaking RPG HUD balance and a 90s arcade shader look for the next theme.",
    media: {
      type: "image",
      url: sampleImages.blazes
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
    content: "Game loop question: are pause menu transitions more immersive with soft fade, or do users prefer instant feedback for high-action encounters?",
    media: {
      type: "image",
      url: sampleImages.joyrides
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
    content: "Designing joystick-friendly inventory grids — keeping controls responsive and readable in split second fights.",
    media: {
      type: "image",
      url: sampleImages.escape
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
    content: "Level design thought: what makes a realistic game city feel alive while still performant on mobile hardware?",
    media: {
      type: "image",
      url: sampleImages.blazes
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
    content: "Got a prototype input binding that switches combat mode with one thumb press — it feels great in practice.",
    media: {
      type: "image",
      url: sampleImages.elephants
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
    content: "Game audio design: subtle spatial cues in laser blasts can boost clarity during crowded boss phases.",
    media: {
      type: "image",
      url: sampleImages.escape
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
    content: "Sharing early ideas about game art direction: neon city nights with texture detail optimized for 60 fps.",
    media: {
      type: "image",
      url: sampleImages.elephants
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
