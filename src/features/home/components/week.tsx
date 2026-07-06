import { FileText, Lock } from "lucide-react"

type Badge = {
  text: string
  variant: "success" | "danger"
}

type Lesson = {
  title: string
  locked?: boolean
  badges?: Badge[]
  type?: "pdf" | "quiz"
  file?: string
  quizId?: string
}

type WeekProps = {
  title: string
  description: string
  lessons: Lesson[]
  onPdfClick?: (file: string, title: string) => void
  onQuizClick?: (quizId: string) => void
}

const badgeStyles: Record<Badge["variant"], string> = {
  success: "bg-[#EEF9F6] text-[#137752]",
  danger: "bg-[#FFF1F1] text-[#B91C1C]",
}

function Badge({ text, variant }: Badge) {
  return (
    <span className={`rounded px-2.5 py-1 text-xs font-semibold ${badgeStyles[variant]}`}>
      {text}
    </span>
  )
}

function LessonRow({
  lesson,
  onPdfClick,
  onQuizClick,
}: {
  lesson: Lesson
  onPdfClick?: (file: string, title: string) => void
  onQuizClick?: (quizId: string) => void
}) {
  const isClickable =
    (lesson.type === "pdf" && lesson.file) || (lesson.type === "quiz" && lesson.quizId)

  function handleClick() {
    if (lesson.type === "pdf" && lesson.file && onPdfClick) {
      onPdfClick(lesson.file, lesson.title)
    } else if (lesson.type === "quiz" && lesson.quizId && onQuizClick) {
      onQuizClick(lesson.quizId)
    }
  }

  return (
    <div
      className={`flex items-center justify-between border-b border-[#EFEFEF] py-3 last:border-b-0 ${isClickable ? "cursor-pointer" : ""}`}
      onClick={handleClick}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") handleClick()
            }
          : undefined
      }
    >
      <div className="flex min-w-0 items-center gap-3">
        <FileText className="h-5 w-5 shrink-0 text-[#999]" strokeWidth={1.5} />
        <span className="truncate text-base font-medium text-[#222] max-md:text-sm">
          {lesson.title}
        </span>
      </div>
      <div className="ml-3 flex shrink-0 items-center gap-1.5">
        {lesson.locked && (
          <Lock className="h-4 w-4 text-[#999]" strokeWidth={1.5} />
        )}
        {lesson.badges?.map((badge, i) => (
          <Badge key={i} {...badge} />
        ))}
      </div>
    </div>
  )
}

export function Week({ title, description, lessons, onPdfClick, onQuizClick }: WeekProps) {
  return (
    <div className="w-full rounded-[5px] border border-[#EAEAEA] bg-white p-6 max-md:p-5">
      <h3 className="text-2xl font-bold text-[#111] max-md:text-xl">{title}</h3>
      <p className="mt-2 text-base font-normal leading-relaxed text-[#666] max-md:text-sm">
        {description}
      </p>
      <div className="my-4 h-px bg-[#EAEAEA]" />
      <div>
        {lessons.map((lesson, i) => (
          <LessonRow
            key={i}
            lesson={lesson}
            onPdfClick={onPdfClick}
            onQuizClick={onQuizClick}
          />
        ))}
      </div>
    </div>
  )
}
