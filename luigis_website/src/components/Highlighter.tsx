"use client"

import { TextHighlighter } from "./text-highlighter"
import { Transition } from "motion"

interface HighlightedParagraphProps {
  text: string
  highlights: string[]
  highlightColor?: string
  className?: string
  highlightClassName?: string
  transition?: Transition
  useInViewOptions?: {
    once?: boolean
    initial?: boolean
    amount?: number | "all" | "some"
  }
}

/**
 * HighlightedParagraph (HP)
 *
 * Renders a <p> tag where specific phrases are automatically
 * wrapped in <TextHighlighter>. Pass the full paragraph as `text`
 * and list the phrases you want highlighted in `highlights`.
 *
 * Usage:
 *   <HP
 *     text="The quick brown fox jumps over the lazy dog."
 *     highlights={["quick brown fox", "lazy dog"]}
 *     {...hlProps}
 *   />
 */
export function HighlightedParagraph({
  text,
  highlights,
  highlightColor = "#F2AD91",
  className,
  highlightClassName = "rounded-[0.3em] px-px",
  transition = { type: "spring", duration: 1, delay: 0.4, bounce: 0 },
  useInViewOptions = { once: true, initial: true, amount: 0.1 },
}: HighlightedParagraphProps) {
  // Escape special regex characters in each highlight phrase
  const escaped = highlights.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  )

  // Split the full text into plain and highlighted parts
  const regex = new RegExp(`(${escaped.join("|")})`)
  const parts = text.split(regex)

  return (
    <p className={className}>
      {parts.map((part, i) =>
        highlights.includes(part) ? (
          <TextHighlighter
            key={i}
            className={highlightClassName}
            transition={transition as Transition}
            highlightColor={highlightColor}
            useInViewOptions={useInViewOptions}
          >
            {part}
          </TextHighlighter>
        ) : (
          part
        )
      )}
    </p>
  )
}

// Shorthand alias
export const HP = HighlightedParagraph

// Shared default props — spread these into <HP> to keep config in one place
export const defaultHlProps = {
  highlightColor: "#F2AD91",
  highlightClassName: "rounded-[0.3em] px-px",
  transition: { type: "spring", duration: 1, delay: 0.4, bounce: 0 } as Transition,
  useInViewOptions: { once: true, initial: true, amount: 0.1 },
}