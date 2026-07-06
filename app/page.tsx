import type { Metadata } from "next"
import { HomePage } from "@/src/features/home/components/homePage"
import { course } from "@/src/features/home/data/course"

export const metadata: Metadata = {
  title: course.title,
  description: course.description,
}

export default function Page() {
  return <HomePage />
}
