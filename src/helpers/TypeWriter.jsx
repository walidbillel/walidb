import React, { useState, useEffect } from 'react';

const speedConstants = {
  DELETING_SPEED: 150,
  TYPING_SPEED: 30,
};

function TypeWriter({ messages, heading }) {
  const [gState, setGState] = useState({
    text: '',
    message: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: speedConstants.TYPING_SPEED,
  });

  useEffect(() => {
    let timer = '';
    const handleTyping = () => {
      setGState((cs) => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs),
      }));
      timer = setTimeout(handleTyping, gState.typingSpeed);
    };
    handleTyping();
    return () => clearTimeout(timer);
  }, [gState.isDeleting, gState.typingSpeed]);

  useEffect(() => {
    if (!gState.isDeleting && gState.text === gState.message) {
      setTimeout(() => {
        setGState((cs) => ({
          ...cs,
          isDeleting: true,
        }));
      }, 500);
    } else if (gState.isDeleting && gState.text === '') {
      setGState((cs) => ({
        ...cs, // cs means currentState
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages),
      }));
    }
  }, [gState.text, gState.message, gState.isDeleting, messages]);

  function getCurrentText(currentState) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState, data) {
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState) {
    return currentState.isDeleting
      ? speedConstants.TYPING_SPEED
      : speedConstants.DELETING_SPEED;
  }

  return (
    <>
      {heading}&nbsp;
      <span>{gState.text}</span>
    </>
  );
}

export default TypeWriter;
