import { Clock, BookOpen, Users, Globe } from "lucide-react"
import { courseMaterials } from "@/src/features/home/data/courseMaterials"

const rows = [
  { label: "Duration:", value: courseMaterials.duration, icon: Clock },
  { label: "Lessons:", value: String(courseMaterials.lessons), icon: BookOpen },
  { label: "Enrolled:", value: courseMaterials.enrolled, icon: Users },
  { label: "Language:", value: courseMaterials.language, icon: Globe },
]

const columns = [rows, rows]

export function CourseMaterials() {
  return (
    <section className="bg-white">
      <h2 className="mb-8 text-3xl font-bold leading-none text-[#111]">
        Course Materials
      </h2>

      <div className="rounded-[5px] border border-[#F1F1F1] p-8 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col">
              {col.map((row, rowIdx) => {
                const Icon = row.icon
                const isLast = rowIdx === col.length - 1
                return (
                  <div key={rowIdx}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon
                          className="h-5 w-5 shrink-0 text-[#2E2E2E]"
                          strokeWidth={1.5}
                        />
                        <span className="text-base font-medium text-[#333]">
                          {row.label}
                        </span>
                      </div>
                      <span className="text-right text-base font-medium text-[#222]">
                        {row.value}
                      </span>
                    </div>
                    {!isLast && <div className="my-4 h-px bg-[#ECECEC]" />}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
