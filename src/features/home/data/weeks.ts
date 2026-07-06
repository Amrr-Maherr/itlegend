const weekDescription =
  "Advanced story telling techniques for writers: Personas, Characters & Plots"

export const weeks = [
  {
    title: "Week 1-4",
    description: weekDescription,
    lessons: [
      { title: "Introduction", locked: true },
      { title: "Course Overview", locked: true },
      {
        title: "Course Overview",
        type: "pdf" as const,
        file: "/pdf/Amr_Maher___Front_End_Developer.pdf",
        badges: [
          { text: "0 QUESTION", variant: "success" as const },
          { text: "10 MINUTES", variant: "danger" as const },
        ],
      },
      { title: "Course Exercise / Reference Files", locked: true },
      { title: "Code Editor Installation (Optional if you have one)", locked: true },
      { title: "Embedding PHP in HTML", locked: true },
    ],
  },
  {
    title: "Week 5-8",
    description: weekDescription,
    lessons: [
      { title: "Database Fundamentals", locked: true },
      { title: "Connecting to MySQL", locked: true },
      {
        title: "CRUD Operations",
        type: "quiz" as const,
        quizId: "crud-operations",
        badges: [
          { text: "5 QUESTIONS", variant: "danger" as const },
          { text: "20 MINUTES", variant: "success" as const },
        ],
      },
      { title: "User Authentication", locked: true },
      { title: "Session Management", locked: true },
    ],
  },
  {
    title: "Week 9-12",
    description: weekDescription,
    lessons: [
      { title: "JavaScript ES6+ Features", locked: true },
      {
        title: "React Fundamentals",
        type: "quiz" as const,
        quizId: "react-fundamentals",
        badges: [{ text: "3 QUESTIONS", variant: "success" as const }],
      },
      { title: "State Management", locked: true },
      { title: "API Integration", locked: true },
      { title: "Deployment & CI/CD", locked: true },
    ],
  },
]
