import { MessageSquare } from "lucide-react"
import type { Comment } from "@/src/features/home/data/comments"

type CommentsProps = {
  comments: Comment[]
}

function CommentCard({ author, image, date, content }: Comment) {
  return (
    <div className="flex w-full gap-6 bg-white">
      <img
        src={image}
        alt={author}
        className="h-14 w-14 shrink-0 rounded-full object-cover max-md:h-12 max-md:w-12"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-[#555] max-md:text-base">
          {author}
        </h3>
        <p className="mt-1 text-sm font-normal text-[#6B7280]">{date}</p>
        <p className="mt-3 max-w-[900px] text-base font-normal leading-relaxed text-[#666] max-md:text-sm">
          {content}
        </p>
      </div>
    </div>
  )
}

export function Comments({ comments }: CommentsProps) {
  if (comments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-8 text-center">
        <MessageSquare className="h-8 w-8 text-muted-foreground/50" />
        <h3 className="text-sm font-semibold">No comments yet</h3>
        <p className="text-xs text-muted-foreground">
          Be the first to share your thoughts.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col divide-y divide-[#EFEFEF] [&>*]:p-4">
      {comments.map((comment) => (
        <CommentCard key={comment.id} {...comment} />
      ))}
    </div>
  )
}
