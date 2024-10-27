// Typewriter.tsx
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  speed?: number;
  delayBetweenWords?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  speed = 100,
  delayBetweenWords = 1000,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (index < (words[wordIndex]?.length ?? 0)) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[wordIndex]?.[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setDisplayedText('');
      setIndex(0);
      setWordIndex((prev) => (prev + 1) % words.length);
    }, delayBetweenWords);
    return () => clearTimeout(timeout);
  }, [index, words, wordIndex, speed, delayBetweenWords]);

  return (
    <span
      style={{
        minHeight: '1.5em', // Adjust this value as needed
        display: 'inline-block',
        overflow: 'hidden',
      }}
    >
      {displayedText}
    </span>
  );
};

export default Typewriter;
