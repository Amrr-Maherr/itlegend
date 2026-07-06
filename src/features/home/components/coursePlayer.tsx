"use client"

import { useRef, useState, useEffect } from "react"
import { Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type CoursePlayerProps = {
  isWide: boolean
  onWideChange: (wide: boolean) => void
}

export function CoursePlayer({ isWide, onWideChange }: CoursePlayerProps) {
  const playerRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handler = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handler)
    return () => document.removeEventListener("fullscreenchange", handler)
  }, [])

  const toggleFullscreen = async () => {
    if (!playerRef.current) return
    if (!document.fullscreenElement) {
      try {
        await playerRef.current.requestFullscreen()
      } catch {
        // Fullscreen API not supported
      }
    } else {
      await document.exitFullscreen()
    }
  }

  return (
    <div
      ref={playerRef}
      className="relative group bg-black rounded-lg overflow-hidden"
    >
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Course video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onWideChange(!isWide)}
        >
          {isWide ? "Normal" : "Wide"}
        </Button>
        <Button
          variant="secondary"
          size="icon-sm"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? (
            <Minimize2 className="size-4" />
          ) : (
            <Maximize2 className="size-4" />
          )}
        </Button>
      </div>
    </div>
  )
}
