export type Question = {
  id: number
  text: string
  options: string[]
  correctIndex: number
}

export type Quiz = {
  id: string
  lessonTitle: string
  questions: Question[]
  timeMinutes: number
}

export const quizzes: Quiz[] = [
  {
    id: "crud-operations",
    lessonTitle: "CRUD Operations",
    timeMinutes: 20,
    questions: [
      {
        id: 1,
        text: "What does CRUD stand for?",
        options: [
          "Create, Read, Update, Delete",
          "Compile, Run, Upload, Debug",
          "Copy, Rewrite, Undo, Duplicate",
          "Connect, Request, Use, Disconnect",
        ],
        correctIndex: 0,
      },
      {
        id: 2,
        text: "Which HTTP method is used to create a new resource?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctIndex: 1,
      },
      {
        id: 3,
        text: "In SQL, which command is used to retrieve data?",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        correctIndex: 2,
      },
      {
        id: 4,
        text: "Which status code indicates a successful resource creation?",
        options: ["200 OK", "201 Created", "204 No Content", "301 Moved"],
        correctIndex: 1,
      },
      {
        id: 5,
        text: "What is the purpose of the UPDATE statement?",
        options: [
          "Add new records to a table",
          "Modify existing records in a table",
          "Remove records from a table",
          "Retrieve records from a table",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "react-fundamentals",
    lessonTitle: "React Fundamentals",
    timeMinutes: 10,
    questions: [
      {
        id: 1,
        text: "What is React?",
        options: [
          "A database management system",
          "A JavaScript library for building user interfaces",
          "A programming language",
          "A CSS framework",
        ],
        correctIndex: 1,
      },
      {
        id: 2,
        text: "What is the correct way to create a component in React?",
        options: [
          "class MyComponent extends React.Component",
          "function MyComponent() { return <div /> }",
          "Both are valid",
          "Neither is valid",
        ],
        correctIndex: 2,
      },
      {
        id: 3,
        text: "What is the purpose of React state?",
        options: [
          "To store data that persists across sessions",
          "To manage data that changes over time within a component",
          "To style components",
          "To handle routing",
        ],
        correctIndex: 1,
      },
    ],
  },
]
