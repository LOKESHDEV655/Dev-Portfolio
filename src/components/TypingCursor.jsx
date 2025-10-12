// TypingEffect.js
import React, { useState, useEffect } from "react";

export default function TypingEffect() {
  const words = [
    "Full Stack Developer",
    "React JS Enthusiast",
    "Spring Boot Backend Developer",
    "Problem Solver",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); // typing speed

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
      setSpeed(isDeleting ? 50 : 150); // faster when deleting
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, speed, wordIndex, words]);

  return (
    <div style={{ fontSize: "24px", fontWeight: "bold" }}>
      {text}
      <span style={{ borderRight: "2px solid #000", marginLeft: "2px" }}></span>
    </div>
  );
}
