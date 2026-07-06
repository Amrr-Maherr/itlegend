"use client";

import { useState } from "react";
import { Comments } from "@/src/features/home/components/comments";
import { CourseMaterials } from "@/src/features/home/components/courseMaterials";
import { CoursePlayer } from "@/src/features/home/components/coursePlayer";
import { HeaderBreadcrumb } from "@/src/features/home/components/headerBreadcrumb";
import { LeaderboardDialog } from "@/src/features/home/components/leaderboard";
import { NavIcons } from "@/src/features/home/components/navIcons";
import { PdfViewerDialog } from "@/src/features/home/components/pdfViewerDialog";
import { ProgressBar } from "@/src/features/home/components/progressBar";
import { QuizDialog } from "@/src/features/home/components/quizDialog";
import { ReviewForm } from "@/src/features/home/components/reviewForm";
import { SocialIcons } from "@/src/features/home/components/socialIcons";
import { Week } from "@/src/features/home/components/week";
import { comments } from "@/src/features/home/data/comments";
import { course } from "@/src/features/home/data/course";
import {
  leaderboardData,
  leaderboardMessages,
} from "@/src/features/home/data/leaderboard";
import { quizzes } from "@/src/features/home/data/quizQuestions";
import { weeks } from "@/src/features/home/data/weeks";

export function HomePage() {
  const [isWide, setIsWide] = useState(false);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);
  const [leaderboardMsg] = useState(
    () =>
      leaderboardMessages[
        Math.floor(Math.random() * leaderboardMessages.length)
      ],
  );
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [selectedPdfTitle, setSelectedPdfTitle] = useState("");
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [quizDialogKey, setQuizDialogKey] = useState(0);

  const player = <CoursePlayer isWide={isWide} onWideChange={setIsWide} />;

  return (
    <div className="flex flex-col items-start justify-center p-6">
      <div className="mb-6 flex w-full flex-col gap-5 bg-[#F5F9FA] p-5">
        <HeaderBreadcrumb />
        <h2 className="text-2xl font-bold">{course.title}</h2>
      </div>

      <div className="sticky top-0 z-10 mb-8 w-full md:hidden">{player}</div>

      {isWide && <div className="mb-8 hidden w-full md:block">{player}</div>}

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-10 md:gap-20">
        <div className="flex flex-col gap-8 md:col-span-6">
          {!isWide && <div className="hidden md:block">{player}</div>}

          <div className="flex items-center justify-start gap-4">
            <div className="flex items-center justify-center gap-4 lg:hidden">
              <NavIcons onLeaderboardClick={() => setLeaderboardOpen(true)} />
            </div>
            <div className="hidden items-center justify-center lg:flex">
              <SocialIcons />
            </div>
          </div>

          <div id="curriculum">
            <CourseMaterials />
          </div>
          <div id="comments">
            <Comments comments={comments} />
          </div>
          <div id="questions">
            <ReviewForm onSubmit={(comment) => console.log(comment)} />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:col-span-4">
          <ProgressBar />
          {weeks.map((w, i) => (
            <Week
              key={i}
              title={w.title}
              description={w.description}
              lessons={w.lessons}
              onPdfClick={(file, title) => {
                setSelectedPdf(file);
                setSelectedPdfTitle(title);
              }}
              onQuizClick={(quizId) => {
                setSelectedQuizId(quizId);
                setQuizDialogKey((k) => k + 1);
              }}
            />
          ))}
        </div>
      </div>

      <LeaderboardDialog
        open={leaderboardOpen}
        onOpenChange={setLeaderboardOpen}
        leaderboard={leaderboardData}
        motivationMessage={leaderboardMsg}
      />

      <QuizDialog
        key={quizDialogKey}
        open={!!selectedQuizId}
        onOpenChange={() => setSelectedQuizId(null)}
        quiz={quizzes.find((q) => q.id === selectedQuizId) || null}
      />

      <PdfViewerDialog
        open={!!selectedPdf}
        onClose={() => setSelectedPdf(null)}
        file={selectedPdf}
        title={selectedPdfTitle}
      />
    </div>
  );
}
