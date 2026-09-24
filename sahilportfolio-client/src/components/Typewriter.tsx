"use client";

import { useEffect, useState } from "react";
import { roles } from "@/data/site";

export function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[index];
    const delay = deleting ? 45 : 90;
    const pause = full === text && !deleting ? 1400 : 0;

    const id = window.setTimeout(() => {
      if (pause) {
        setDeleting(true);
        return;
      }
      if (!deleting) {
        setText(full.slice(0, text.length + 1));
        return;
      }
      if (text.length === 0) {
        setDeleting(false);
        setIndex((current) => (current + 1) % roles.length);
        return;
      }
      setText(full.slice(0, text.length - 1));
    }, pause || delay);

    return () => window.clearTimeout(id);
  }, [deleting, index, text]);

  const article = /^[aeiou]/i.test(roles[index]) ? "an" : "a";

  return (
    <p className="text-3xl font-bold text-white sm:text-5xl">
      I&apos;m {article} {text}
      <span className="caret text-purple-400">|</span>
    </p>
  );
}
