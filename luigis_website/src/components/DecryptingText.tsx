import React, { useEffect, useMemo, useState } from "react";

const CHARACTERS = "!@#$%^&*()_+-=[]{}|;:,.<>/?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

interface DecryptingTextProps {
  text: string | string[];
  speed?: number;           // speed per character
  initialDelay?: number;
  waitTime?: number;        // time to show full text before scrambling to next
  loop?: boolean;
  className?: string;
}

export const DecryptingText = ({
  text,
  speed = 20,
  initialDelay = 300,
  waitTime = 2000,
  loop = true,
  className = "",
}: DecryptingTextProps) => {
  const texts = useMemo(() => Array.isArray(text) ? text : [text], [text]);

  const [displayText, setDisplayText] = useState("");
  const [resolvingIndex, setResolvingIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isResolving, setIsResolving] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentText = texts[currentTextIndex];

    if (!isResolving) {
      timeout = setTimeout(() => {
        setDisplayText("");
        setResolvingIndex(0);
        setIsResolving(true);
      }, initialDelay);
    } else {
      if (resolvingIndex < currentText.length) {
        timeout = setTimeout(() => {
          const resolvedPart = currentText.slice(0, resolvingIndex + 1);
          const randomChars = Array(currentText.length - resolvingIndex - 1)
            .fill("")
            .map(() => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)])
            .join("");

          setDisplayText(resolvedPart + randomChars);
          setResolvingIndex((prev) => prev + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => {
          if (loop) {
            setIsResolving(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }, waitTime);
      }
    }

    return () => clearTimeout(timeout);
  }, [resolvingIndex, isResolving, currentTextIndex, texts, speed, waitTime, loop, initialDelay]);

  return (
    <span className={`inline font-mono tracking-tight ${className}`}>
      {displayText}
    </span>
  );
};
