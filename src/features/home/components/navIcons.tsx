import { BookOpen, HelpCircle, MessageCircle, Trophy } from "lucide-react"

const navIcons = [
  { id: "curriculum", icon: BookOpen },
  { id: "comments", icon: MessageCircle },
  { id: "questions", icon: HelpCircle },
  { id: "leaderboard", icon: Trophy },
] as const

type NavIconsProps = {
  onLeaderboardClick: () => void
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function NavIcons({ onLeaderboardClick }: NavIconsProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      {navIcons.map((item) => {
        const Icon = item.icon
        return (
          <button
            key={item.id}
            type="button"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] transition-all duration-200 hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none md:h-16 md:w-16"
            aria-label={item.id}
            onClick={() =>
              item.id === "leaderboard"
                ? onLeaderboardClick()
                : scrollToSection(item.id)
            }
          >
            <Icon className="h-5 w-5" strokeWidth={2} />
          </button>
        )
      })}
    </div>
  )
}
