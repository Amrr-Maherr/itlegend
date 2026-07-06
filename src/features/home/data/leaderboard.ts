export type LeaderboardEntry = {
  id: string
  name: string
  avatar: string
  points: number
  isCurrentUser?: boolean
}

export const leaderboardMessages = [
  "عظيم يا بطل، واضح إنك ماشي كويس 👏 أفضل منك فيه ناس، لكن أنت كمان فيه ناس نفسها تبقى في المكان اللي أنت وصلت له.",
  "استمر في التركيز، المنافسة شديدة لكنك عندك فرصة حقيقية لتكون الأول 🔥",
  "مش مهم تكون الأول دلوقتي، المهم إنك متوقفش تحاول. الطريق لسه طويل 💪",
  "أنت بتعمل مجهود كبير، وخلي بالك إن النجاح مش بيجي بين ليلة وضحاها. استمر 😊",
  "شايف إنك نازل شوية؟ كمل ومتوقفش، أحسن ناس عرفت توصل للقمة هما اللي متوقفوش أبدًا ⭐",
]

export const leaderboardData: LeaderboardEntry[] = [
  { id: "1", name: "Ahmed Hassan", avatar: "🧑‍💻", points: 980 },
  { id: "2", name: "Mohamed Ali", avatar: "🧑‍🏫", points: 960 },
  { id: "3", name: "Sara Adel", avatar: "👩‍💻", points: 940 },
  { id: "4", name: "Karim Tarek", avatar: "🧑‍🎨", points: 920 },
  { id: "5", name: "You", avatar: "🙋", points: 890, isCurrentUser: true },
  { id: "6", name: "Nour Hassan", avatar: "👩‍🎓", points: 870 },
  { id: "7", name: "Omar Khaled", avatar: "🧑‍🔬", points: 850 },
]
