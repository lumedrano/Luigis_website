// src/components/typewriter.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface TypePart {
  text: string;
  className?: string;
}

interface TypewriterProps {
  lines: TypePart[][];
  speed?: number;
  initialDelay?: number;
  className?: string;
  showCursor?: boolean;
  cursorChar?: string | React.ReactNode;
  cursorClassName?: string;
}

const Typewriter = ({
  lines,
  speed = 30,
  initialDelay = 0,
  className,
  showCursor = true,
  cursorChar = "_",
  cursorClassName = "ml-1",
}: TypewriterProps) => {
  const [displayedLines, setDisplayedLines] = useState<TypePart[][]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (!lines || lines.length === 0) return;

    const typingTimeout = setTimeout(() => {
      const line = lines[currentLine];
      if (!line) return;

      // Flatten line text for character-by-character typing
      const fullText = line.map((p) => p.text).join("");
      if (currentCharIndex < fullText.length) {
        // Build new line content up to currentCharIndex
        let charsLeft = currentCharIndex;
        const newLine: TypePart[] = [];
        for (const part of line) {
          if (charsLeft >= part.text.length) {
            newLine.push(part);
            charsLeft -= part.text.length;
          } else if (charsLeft > 0) {
            newLine.push({
              text: part.text.slice(0, charsLeft),
              className: part.className,
            });
            charsLeft = 0;
          }
        }

        const updatedLines = [...displayedLines];
        updatedLines[currentLine] = newLine;
        setDisplayedLines(updatedLines);

        setCurrentCharIndex((prev) => prev + 1);
      } else {
        // Move to next line
        setCurrentLine((prev) => prev + 1);
        setCurrentCharIndex(0);
      }
    }, currentCharIndex === 0 ? initialDelay : speed);

    return () => clearTimeout(typingTimeout);
  }, [currentCharIndex, currentLine, displayedLines, lines, speed, initialDelay]);

  return (
    <div
      className={cn(
        "inline-block font-mono text-sm md:text-base whitespace-pre-wrap tracking-tight",
        className
      )}
    >
      {lines.map((_, idx) => (
        <div key={idx}>
          {displayedLines[idx]?.map((part, pidx) => (
            <span key={pidx} className={part.className}>
              {part.text}
            </span>
          ))}
          {showCursor && idx === currentLine && currentCharIndex <= lines[idx].map(p => p.text).join("").length && (
            <motion.span
              className={cursorClassName}
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              {cursorChar}
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
};

export { Typewriter };
