"use client"

import { useEffect, useState, useRef } from "react"
import { CheckCircle2, ChevronLeft, Clock } from "lucide-react"

import {
  DialogRoot,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogClose,
} from "@/components/ui/dialog"
import type { Quiz } from "@/src/features/home/data/quizQuestions"

type QuizDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  quiz: Quiz | null
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
}

function loadSavedState(quiz: Quiz | null) {
  if (!quiz) return { answers: {} as Record<number, number>, timeLeft: 0 }
  const key = `quiz-${quiz.id}`
  try {
    const saved = localStorage.getItem(key)
    if (saved) {
      const data = JSON.parse(saved) as { answers?: Record<number, number>; timeLeft?: number }
      return {
        answers: data.answers ?? {},
        timeLeft: typeof data.timeLeft === "number" ? data.timeLeft : quiz.timeMinutes * 60,
      }
    }
  } catch {}
  return { answers: {} as Record<number, number>, timeLeft: quiz.timeMinutes * 60 }
}

function OptionCard({
  label,
  selected,
  onSelect,
}: {
  label: string
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full overflow-hidden rounded-2xl shadow-md transition-all duration-200 ${
        selected
          ? "bg-[#4A69E2] text-white shadow-[#4A69E2]/25"
          : "bg-white text-[#1F2937] hover:shadow-lg"
      }`}
    >
      <div
        className={`flex w-[72px] shrink-0 items-center justify-center border-r py-5 ${
          selected ? "border-white/25" : "border-[#E5E7EB]"
        }`}
      >
        <div
          className={`flex h-6 w-6 items-center justify-center rounded border-2 ${
            selected ? "border-white" : "border-[#4A69E2]"
          }`}
        >
          {selected && <div className="h-2.5 w-2.5 rounded-sm bg-white" />}
        </div>
      </div>
      <div className="flex flex-1 items-center px-5 py-5 text-left text-base font-medium">
        {label}
      </div>
    </button>
  )
}

export function QuizDialog({ open, onOpenChange, quiz }: QuizDialogProps) {
  const saved = loadSavedState(quiz)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>(saved.answers)
  const [timeLeft, setTimeLeft] = useState(saved.timeLeft)
  const [submitted, setSubmitted] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const storageKey = quiz ? `quiz-${quiz.id}` : ""

  useEffect(() => {
    if (!storageKey) return
    localStorage.setItem(storageKey, JSON.stringify({ answers, timeLeft }))
  }, [answers, timeLeft, storageKey])

  useEffect(() => {
    if (!open || submitted) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setSubmitted(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [open, submitted])

  useEffect(() => {
    if (submitted && storageKey) {
      localStorage.removeItem(storageKey)
    }
  }, [submitted, storageKey])

  if (!quiz) return null

  const { questions } = quiz
  const current = questions[currentIndex]
  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === questions.length
  const totalTimeSeconds = quiz.timeMinutes * 60
  const score = submitted
    ? questions.filter((q) => answers[q.id] === q.correctIndex).length
    : 0

  function handleSelect(optionIndex: number) {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [current.id]: optionIndex }))
  }

  function handleSubmit() {
    setSubmitted(true)
  }

  function handleClose() {
    if (intervalRef.current) clearInterval(intervalRef.current)
    onOpenChange(false)
  }

  return (
    <DialogRoot open={open} onOpenChange={handleClose}>
      <DialogPortal>
        <DialogBackdrop className="bg-black/50" />
        <DialogPopup className="!max-w-[420px] !h-[min(90vh,820px)] !rounded-[32px] !border-0 !p-0 !overflow-hidden flex flex-col !shadow-2xl">
          <div className="flex min-h-0 flex-1 flex-col bg-[#4A69E2]">
            <div className="px-5 pt-5 pb-14">
              <div className="mb-8 flex items-center">
                <DialogClose className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10">
                  <ChevronLeft className="h-6 w-6" strokeWidth={2} />
                  <span className="sr-only">Close</span>
                </DialogClose>

                <div className="flex flex-1 justify-center">
                  {!submitted && (
                    <div className="flex items-center gap-2 rounded-xl bg-[#FBC531] px-5 py-2.5 shadow-[0_4px_14px_rgba(251,197,49,0.45)]">
                      <Clock className="h-4 w-4 text-white" strokeWidth={2.5} />
                      <span className="text-base font-bold tracking-wide text-white">
                        {formatTime(timeLeft)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="h-10 w-10" />
              </div>

              {!submitted && (
                <div className="flex items-center justify-center gap-3">
                  {questions.map((q, i) => {
                    const isActive = i === currentIndex
                    const isAnswered = answers[q.id] !== undefined

                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => setCurrentIndex(i)}
                        className={`flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-white text-[#4A69E2] shadow-md"
                            : isAnswered
                              ? "border-2 border-white/80 bg-white/20 text-white"
                              : "border-2 border-white/60 bg-transparent text-white hover:border-white hover:bg-white/10"
                        }`}
                      >
                        {q.id}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="-mt-10 flex min-h-0 flex-1 flex-col overflow-hidden rounded-t-[40px] bg-white">
              {submitted ? (
                <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-y-auto p-8 text-center">
                  <CheckCircle2 className="h-16 w-16 text-[#4A69E2]" />
                  <p className="text-2xl font-bold text-[#1F2937]">Quiz Complete!</p>
                  <p className="text-lg text-[#6B7280]">
                    You scored{" "}
                    <span className="font-bold text-[#4A69E2]">
                      {score}/{questions.length}
                    </span>
                  </p>
                  <p className="text-sm text-[#9CA3AF]">
                    Time taken: {formatTime(totalTimeSeconds - timeLeft)}
                  </p>
                  <div className="mt-2 flex flex-wrap justify-center gap-2">
                    {questions.map((q) => (
                      <span
                        key={q.id}
                        className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${
                          answers[q.id] === q.correctIndex
                            ? "bg-[#4A69E2]/15 text-[#4A69E2]"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {q.id}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-4 rounded-2xl bg-[#4A69E2] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3d5bc7]"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 pb-8 pt-10">
                  <p className="mb-8 text-lg leading-relaxed text-[#1F2937]">
                    <span className="font-bold">{current.id}.</span> {current.text}
                  </p>

                  <div className="flex flex-col gap-4">
                    {current.options.map((option, i) => (
                      <OptionCard
                        key={i}
                        label={option}
                        selected={answers[current.id] === i}
                        onSelect={() => handleSelect(i)}
                      />
                    ))}
                  </div>

                  {allAnswered && (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="mt-8 w-full rounded-2xl bg-[#4A69E2] py-4 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#3d5bc7]"
                    >
                      Submit Quiz
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
  )
}
