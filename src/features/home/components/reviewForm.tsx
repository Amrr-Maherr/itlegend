"use client"

import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"

type ReviewFormProps = {
  placeholder?: string
  buttonText?: string
  defaultValue?: string
  loading?: boolean
  disabled?: boolean
  onChange?: (value: string) => void
  onSubmit: (comment: string) => void
}

export function ReviewForm({
  placeholder = "Write a comment",
  buttonText = "Submit Review",
  defaultValue = "",
  loading = false,
  disabled = false,
  onChange,
  onSubmit,
}: ReviewFormProps) {
  const [comment, setComment] = useState(defaultValue)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim()) return
    onSubmit(comment.trim())
    setComment("")
  }

  return (
    <form onSubmit={handleSubmit} className="w-full bg-white">
      <textarea
        value={comment}
        onChange={(e) => {
          setComment(e.target.value)
          onChange?.(e.target.value)
        }}
        placeholder={placeholder}
        disabled={disabled}
        rows={6}
        className="w-full resize-y rounded-[5px] border-0 bg-white p-6 text-base font-normal text-[#333] shadow-[0_12px_35px_rgba(0,0,0,0.08)] outline-none transition-[box-shadow] duration-200 placeholder:font-normal focus:ring-2 focus:ring-[#45C0A6] max-md:h-[180px] max-md:min-h-[180px] max-md:p-5 max-md:text-sm"
        style={{ minHeight: 180 }}
      />
      <button
        type="submit"
        disabled={disabled || loading || !comment.trim()}
        className="mt-6 inline-flex h-12 cursor-pointer items-center gap-3 rounded-[4px] bg-[#45C0A6] px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-[#3aad95] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 max-md:mt-4 max-md:w-full max-md:justify-center"
      >
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            {buttonText}
            <ArrowRight className="h-5 w-5" />
          </>
        )}
      </button>
    </form>
  )
}
