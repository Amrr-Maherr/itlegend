"use client"

import {
  DialogRoot,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogClose,
} from "@/components/ui/dialog"
import type { LeaderboardEntry } from "@/src/features/home/data/leaderboard"

type LeaderboardDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  leaderboard: LeaderboardEntry[]
  motivationMessage: string
}

function LeaderboardRow({ entry, rank }: { entry: LeaderboardEntry; rank: number }) {
  return (
    <div
      className={`flex h-16 items-center gap-3 rounded-xl bg-white p-4 shadow-sm ${
        entry.isCurrentUser ? "border border-[#45C0A6] bg-[#F0FDF9]" : "border border-[#F1F5F9]"
      }`}
    >
      <span className="w-6 text-center text-sm font-semibold text-[#6B7280]">
        {rank}
      </span>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5E7EB] text-sm font-semibold text-[#6B7280]">
        {entry.avatar || entry.name.charAt(0)}
      </div>
      <span className="flex-1 text-sm font-medium text-[#1F2937]">
        {entry.name}
      </span>
      <span className="text-sm font-semibold text-[#45C0A6]">
        {entry.points} pts
      </span>
      {entry.isCurrentUser && (
        <span className="rounded-md bg-[#45C0A6] px-2 py-0.5 text-xs font-semibold text-white">
          You
        </span>
      )}
    </div>
  )
}

export function LeaderboardDialog({
  open,
  onOpenChange,
  leaderboard,
  motivationMessage,
}: LeaderboardDialogProps) {
  return (
    <DialogRoot open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup className="max-w-[420px] rounded-2xl border-[#E5E7EB] p-8 shadow-xl">
          <DialogClose className="absolute right-4 top-4 rounded-full p-1 text-[#9CA3AF] transition-colors hover:text-[#6B7280]">
            <span className="sr-only">Close</span>
            <span aria-hidden="true" className="text-lg leading-none">
              ×
            </span>
          </DialogClose>

          <div className="mt-6 text-center">
            <p className="text-[15px] leading-relaxed text-[#374151]">
              {motivationMessage}
            </p>
          </div>

          <div className="mt-6 rounded-[20px] bg-[#F8FAFC] p-5">
            <div className="flex flex-col gap-3">
              {leaderboard.map((entry, i) => (
                <LeaderboardRow key={entry.id} entry={entry} rank={i + 1} />
              ))}
            </div>
          </div>
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
  )
}
