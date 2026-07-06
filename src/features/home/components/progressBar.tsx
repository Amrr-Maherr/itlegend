export function ProgressBar({ progress = 63 }: { progress?: number }) {
  return (
    <section className="bg-white">
      <h2 className="mb-28 text-3xl font-bold text-[#111] max-md:text-2xl">
        Topics for This Course
      </h2>

      <div className="relative">
        <div
          className="absolute bottom-[calc(100%+16px)] -translate-x-1/2"
          style={{ left: `${progress}%` }}
        >
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-[3px] border-[#D8D8D8] bg-white text-lg font-semibold text-[#4F5DA8] shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            You
          </div>
          <div className="mx-auto h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-[#D8D8D8]" />
        </div>

        <div className="h-[10px] w-full rounded-full bg-[#ECECEC]">
          <div
            className="h-full rounded-full bg-[#63C28A] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div
          className="mt-3 -translate-x-1/2 text-lg font-semibold text-[#4F5DA8]"
          style={{ marginLeft: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
    </section>
  )
}
