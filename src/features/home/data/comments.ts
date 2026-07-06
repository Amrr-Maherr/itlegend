export type Comment = {
  id: string
  author: string
  title: string
  image: string
  date: string
  content: string
  timestamp: string
  likes: number
}

export const comments: Comment[] = [
  {
    id: "1",
    author: "Alice",
    title: "Absolutely worth the time",
    image: "https://i.pravatar.cc/40?img=1",
    date: "2026-07-01",
    content:
      "Great course! Really enjoyed the content. The instructor explained everything clearly and the pacing was just right. I especially loved the hands-on projects in weeks 4 and 5 — they really helped solidify the concepts. I would recommend this to anyone looking to get started in this field. The community support in the forums was also a huge plus. Looking forward to more advanced courses from the same team.",
    timestamp: "2 hours ago",
    likes: 12,
  },
  {
    id: "2",
    author: "Bob",
    title: "More examples please",
    image: "https://i.pravatar.cc/40?img=3",
    date: "2026-06-30",
    content:
      "Could you add more examples in week 3? I felt that section moved a bit too fast and the examples provided weren't enough to fully grasp the topic. A few more real-world scenarios would make a big difference. Other than that, the course structure is solid and the materials are well organized. The quizzes at the end of each module were particularly helpful for revision.",
    timestamp: "1 day ago",
    likes: 5,
  },
  {
    id: "3",
    author: "Charlie",
    title: "Top-notch production quality",
    image: "https://i.pravatar.cc/40?img=5",
    date: "2026-06-28",
    content:
      "The video quality is excellent. Crystal clear audio, well-timed captions, and the screen recordings were easy to follow. The instructor's tone is engaging and kept me hooked throughout. My only suggestion would be to add downloadable cheat sheets for each week. Overall, this is one of the best online courses I have taken. The balance between theory and practice is perfect.",
    timestamp: "3 days ago",
    likes: 8,
  },
]
