"use client";
import { useState, useEffect, FC, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface TypingProps {
  text: string;
  speed?: number;
  onChange?: Dispatch<SetStateAction<boolean>>;
}

const TypingAnimation: FC<TypingProps> = ({ text, speed = 70, onChange }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStartTyping(true);
    }, 1300);

    return () => clearTimeout(delayTimer);
  }, []);

  useEffect(() => {
    if (startTyping && currentIndex < text.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(typingTimer);
    }
    if (onChange && currentIndex === text.length) {
      setTimeout(() => {
        onChange(true);
      }, 1500);
    }
  }, [text, currentIndex, speed, startTyping]);

  return (
    <TypingText className="w-full font-semibold">{displayedText}</TypingText>
  );
};

export default TypingAnimation;

const TypingText = styled.span`
  font-size: 4vmax;
`;
